---
title: "How to upload a file to Amazon S3 in Java (using Vaadin framework)"
date: "2020-03-13"
template: "post"
draft: false
slug: "vaadin-upload-file-to-amazon-s3-java"
category: "Tutorial"
tags:
  - "Vaadin"
  - "Java"
  - "AWS"
description: "How to upload file to Amazon S3 in Java, but with UI build with Vaadin framework"
socialImage: "/media/vaadin-upload-to-aws.png"
---

![vaadin-upload-to-aws](/media/vaadin-upload-to-aws.png)

Nowadays many applications give access to users for uploading images, avatars, audio or video files, etc. Most commonly developers choose to store this data on a different cloud services.

While working on one of my personal projects - [Tabata - Fitness App](https://tabata.ramonak.io/), I’ve developed an administrative tool for managing the exercises data in the database. I’ve done it using a sweet combination of [Spring Boot](https://spring.io/projects/spring-boot) and [Vaadin framework](https://vaadin.com/). That’s the final result:

![admin-panel](/posts/Vaadin-AWS/adminka-view.JPG)

To upload the video of exercises directly to AWS S3 without the use of AWS console, but with my own administrative panel, I’ve developed a custom component based on [Vaadin’s official upload component](https://vaadin.com/components/vaadin-upload).

![upload_demo](/posts/Vaadin-AWS/upload_supermans_demo.gif)

Here how I’ve done it.

This blog post consists of two parts:

1. [Configure Amazon service for granting access to only one app to the specific S3 bucket](#amazon-services-configuration).
2. [Java code to programmatically upload a file to S3 bucket](#spring-boot-and-vaadin-part).

# Amazon services configuration

## 1. Create AWS account

You can create it [here](http://aws.amazon.com/)

## 2. Create S3 bucket

In the Services menu in the Storage section find S3:

![s3](/posts/Vaadin-AWS/s3.jpg)

Press **Create bucket** button. In the appeared dialog window enter your bucket name, chose the closest to you (or your potential visitors) region and press **Create**.

![create-bucket](/posts/Vaadin-AWS/create-bucket.JPG)

## 3. Create IAM user

For security reasons, we’ll create a new IAM user (which will be our future app) and give permissions only for the app to have access to the created bucket.

In the Services menu chose IAM and then Users under the Access Management section. Press **Add user**.

![add-user](/posts/Vaadin-AWS/add-user.JPG)

Enter username and check **Programmatic access** in the Access type section.

![prog-access](/posts/Vaadin-AWS/prog-access.JPG)

Press **Next: Permissions**. Then click **Attach existing policies directly** and **Create policy**.

![create-policy](/posts/Vaadin-AWS/create-policy.JPG)

Chose JSON tab, then copy and paste a JSON object from the [official AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html). Don’t forget to change text placeholder in the example policy with your own bucket name.

![json-policy](/posts/Vaadin-AWS/json-policy.JPG)

Press **Review policy**. Enter the name of the policy, description (optional) and press **Create policy**.

Go back to **Add user** tab in the browser, refresh the page and find in the list of policies our created policy.

![add-policy](/posts/Vaadin-AWS/add-policy.JPG)

Press **Next: Tags**, **Next: Review** and finally **Create user**. Now you can see the credentials for the user. Download .csv file in order not to lose the credentials as we’ll soon need them.

Our AWS configuration is done. Let’s start to code!

# Spring Boot and Vaadin part

## 4. Start Vaadin project

The most convenient way to start Vaadin project is to use [Vaadin Starter](https://vaadin.com/start/v14).

![vaadin-starter](/posts/Vaadin-AWS/vaadin-starter.JPG)

Download, unzip the folder and open it in your favorite IDE.

It's a basic Vaadin project, but it's fully working app (and it's [PWA](/posts/what-is-progressive-web-app) by default).

Delete all demo stuff: GreetService.java and all inside the MainViev.class constructor.

## 5. Create custom upload component

Create UploadS3.java class:

```java
public class UploadS3 extends Div {

    private final MemoryBuffer buffer;
    private final Upload upload;

    public UploadS3() {
        buffer = new MemoryBuffer();
        upload = new Upload(buffer);
        add(upload);
    }
}
```

Then add this custom component into MainView class:

```java
@Route
@CssImport("./styles/shared-styles.css")
public class MainView extends VerticalLayout {

    public MainView() {
        addClassName("centered-content");

        UploadS3 upload = new UploadS3();
        add(upload);
    }
}
```

Run the project and navigate in a browser to *localhost:8080* (or any other port which you defined in application.properties, I prefer to use 9999 port):

![vaadin-upload](/posts/Vaadin-AWS/vaadin-upload.JPG)

 We can see the default Vaadin’s upload component.

## 6. Configure Amazon Client

First of all, add aws-java-sdk dependency into pom.xml.

```xml
<dependency>
    <groupId>com.amazonaws</groupId>
    <artifactId>aws-java-sdk</artifactId>
    <version>1.11.728</version>
</dependency>
```

Then in **application.properties** file create custom props for AWS credentials and paste the value of **Access key ID** and **Secret access key** from downloaded earlier credentials.csv file. Also, add a property with the name of a created S3 bucket.

```xml
aws.accessKey=XXXXXXXXXXX
aws.secretKey=XXXXXXXXXXXXXXXXXXXXXXXX
aws.s3bucket.name=vaadin-upload
```

Then inject these properties’ values into **MainView** class constructor and pass them to UploadS3 component.

```java
public MainView(@Value("${aws.accessKey}") String accessKey,
                    @Value("${aws.secretKey}") String secretKey,
                    @Value("${aws.s3bucket.name}") String bucketName) {
    addClassName("centered-content");

    UploadS3 upload = new UploadS3(accessKey, secretKey, bucketName);
    add(upload);
}
```

In **UploadS3** class, initialize **AmazonS3 client** with provided credentials. So, for now, the code of the UploadS3 component is:

```java
public class UploadS3 extends Div {

    private final MemoryBuffer buffer;
    private final Upload upload;

    private AmazonS3 s3client;

    private final String accessKey;
    private final String secretKey;
    private final String bucketName;

    public UploadS3(String accessKey, String secretKey, String bucketName) {
        this.buffer = new MemoryBuffer();
        this.upload = new Upload(buffer);
        this.accessKey = accessKey;
        this.secretKey = secretKey;
        this.bucketName = bucketName;
        initAWSClient();
        add(upload);
    }

    private void initAWSClient() {
        AWSCredentials credentials = new BasicAWSCredentials(this.accessKey, this.secretKey);
        this.s3client = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(Regions.EU_CENTRAL_1)
                .build();
    }
}
```

Now we need to add functionality for uploading a file into the S3 bucket. For that create the following method in the UploadS3 class:

```java
...
private String objectKey;
...

private void uploadFile() {
    upload.addSucceededListener(event-> {
        try {
            InputStream is = buffer.getInputStream();
            File tempFile = new File(event.getFileName());
            FileUtils.copyInputStreamToFile(is, tempFile);

            objectKey = tempFile.getName();
            s3client.putObject(new PutObjectRequest(bucketName, objectKey, tempFile));
            if(tempFile.exists()) {
                tempFile.delete();
            }
        } catch (AmazonServiceException | IOException ex) {
            ex.printStackTrace();
        }
    });
}
```

This method creates a temporary file in which the input stream from Vaadin’s upload component is copied. Then this file is uploaded to S3 bucket and deleted after that.

As this method is an event listener we’ll call it in the constructor of UploadS3 class.

```java
public UploadS3(String accessKey, String secretKey, String bucketName) {
    this.buffer = new MemoryBuffer();
    this.upload = new Upload(buffer);
    this.accessKey = accessKey;
    this.secretKey = secretKey;
    this.bucketName = bucketName;
    initAWSClient();
    uploadFile();
    add(upload);
}
```

Let’s test what we’ve developed!

Run the app and open it in the browser.

![upload-piano](/posts/Vaadin-AWS/upload_piano.gif)

It looks like the file is successfully uploaded. But let’s check it in the S3 console.

![bucket_uploaded](/posts/Vaadin-AWS/bucket_uploaded.JPG)

Yes! The file is in the bucket!

> If you are trying to upload a file which size is more than 1MB and getting the error
>
> ```txt
>org.apache.tomcat.util.http.fileupload.FileUploadBase$FileSizeLimitExceededException: The field file exceeds its maximum permitted size of 1048576 bytes.
>```
>
> just increase the limit of the following properties in the application.properties file:
>
> ```xml
> spring.servlet.multipart.max-file-size=10MB
> spring.servlet.multipart.max-request-size=10MB
> ```

# BONUS: private access testing

Remember, when we configured permission policy for the S3 bucket, we set only programmatic access and only for our app. Let’s test it!

First, let’s try to open the downloaded file (image in our case) by its URL, which we’ll obtain programmatically.

For that we need to:

- add TextField component in **MainView** class, pass it to *uploadFile* method of UploadS3 component

```java
private final TextField link;
...

public MainView(@Value("${aws.accessKey}") String accessKey,
                    @Value("${aws.secretKey}") String secretKey,
                    @Value("${aws.s3bucket.name}") String bucketName) {
        ...
        link = new TextField("Link");
        link.setWidthFull();

        ...
        upload.uploadFile(link);

        ...
        add(upload, link);
    }
```

- inside of *uploadFile* method of **UploadS3** class set the URL value of the uploaded file to passed TextField

```java
public void uploadFile(TextField link) {
    upload.addSucceededListener(event-> {
        ...

        link.setValue(s3client.getUrl(bucketName, objectKey).toString());

        ...
    });
}
```

Now when we upload the file, we immediately receive its URL.

![uploaded-link](/posts/Vaadin-AWS/uploaded_link.gif)

