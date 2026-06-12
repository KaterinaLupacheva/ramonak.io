---
title: "How to create custom reusable ESLint, TypeScript, Prettier config for React apps"
date: "2021-12-05"
template: "post"
draft: false
slug: "custom-eslint-config"
category: "Tutorial"
tags:
  - "React"
  - "TypeScript"
  - "ESLint"
description: "How to create a custom reusable ESLint (for TypeScript) and Prettier config and publish it as npm package. And how to add Husky and lint-staged packages to React project."
socialImage: "/media/custom-eslint-config.png"
---

![custom-eslint-config](/media/custom-eslint-config.png)

## Intro

There are many tools that help developers eliminate possible errors and bugs, and in the end, ship more robust and maintainable code. Among them, the most commonly used static code analysis tool is [ESLint](https://eslint.org/).

Another trendy tool is [Prettier](https://prettier.io/). It makes your code look beautiful to developers' eyes (yours included).

And let's not forget about **TypeScript**! It's a static type checker for JavaScript, and it improves developer experience by a ton.

Plus, we will publish our ESLint and Prettier config as an **NPM package**, thus making it reusable and easily installable in any React project (well, generally in any Javascript project, but it will contain react.js / React Native specific rules).

Usually, when I start a new React project, I add all the above-mentioned tools manually, one by one. Finally, I found a time to create my custom config package based on the most typical setup on projects that I'm working/worked on. This blog post is a walkthrough of how I did it.

Also, the blog post will cover how to install [Husky](https://typicode.github.io/husky/#/) and [lint-staged](https://github.com/okonet/lint-staged). Basically, it will ensure that we don't cheat and follow all the necessary rules.

So, let's start!

## 1. Create a Node.js module

```bash
npm init -y
```

Now we have a project with a basic package.json file.

Make sure that the module name begins with _eslint-config-_. I named mine as _eslint-config-ramonak_.

```js
//package.json

...

"name": "eslint-config-ramonak"

...
```

## 2. Add ESLint

The easiest way to add ESLint, necessary dependencies, and basic configuration, is by running:

```bash
npx eslint --init
```

You will be prompted to answer different questions. Based on my typical type of projects, I answered them like that:

![eslint](/posts/eslint-config/eslint.png)

It will install `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint`, `eslint-plugin-react` packages as dev dependencies in the project (in your specific use case packages might be different, depending on your answers). And also, it will add _.eslintrc_ file with the basic config.

## 3. Add Prettier

Run:

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

This will install:

- prettier
- eslint-config-prettier - to turn off all rules that are unnecessary or might conflict with Prettier
- eslint-plugin-prettier - runs Prettier as an ESLint rule and reports differences as individual ESLint issues

Add `plugin:prettier/recommended` as the last extension in your `.eslintrc` file:

```json
{
  "extends": [
    ///other plugins
    ...
    "plugin:prettier/recommended"
  ]
}
```

For the info, it is short for:

```json
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
```

Now we can add our custom prettier options.

> As this blog post's final goal is to create an NPM package, I'll add a prettier config directly into the eslint config without making a separate _.prettierrc_ file. But this might conflict with text editor extensions (like prettier-vscode, for example), as they read directly from _.prettierrc_ file. Possible **solutions** might be:
>
> 1.Create _.prettierrc_ file in your project and copy the configuration from _.eslintrc_ file there.
>
> 2.Uninstall (if already installed) a prettier extension and config your text editor to use ESLint extension only for code formatting. More on that [here](#9-integration-with-vscode).

```json
//.eslintrc

...
"rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "semi": true
      }
    ]
  }
```

You can customize your formatting preferences whatever you like. The list of all possible options is [here](https://prettier.io/docs/en/options.html).

## 4. Add additional ESLint plugins (optional)

There are [numerous ESLint plugins](https://www.npmjs.com/search?q=keywords:eslint-plugin) available for you to add to your project.

I'm going to add [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks). Also I like all imports to be nicely sorted. Fot that let's add [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort).

```bash
npm i -D eslint-plugin-react-hooks eslint-plugin-simple-import-sort
```

Then update .eslintrc file:

```json
{
  "extends": [
    // ...
    "plugin:react-hooks/recommended"
  ],
  "plugins": ["simple-import-sort"], //other plugins omitted
  "rules": {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
    //other rules omitted
  }
}
```

Feel free to add any custom rules based on your specific requirements.

## 5. Create index.js file

We need to add an entry point to our package. So create `index.js` file with the following content:

```js
const eslintrc = require("./.eslintrc.json");

module.exports = eslintrc;
```

## 6. Declare peer dependencies

As it is stated in the official [ESLint docs](https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config), you should declare your dependency on ESLint in `package.json` using the `peerDependencies` field. So just copy all dev dependencies in the `package.json` file to `peerDependencies` field:

```json
//package.json

...

"peerDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.5.0",
    "@typescript-eslint/parser": "^5.5.0",
    "eslint": "^8.4.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.27.1",
    "eslint-plugin-react-hooks": "^4.3.0",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "prettier": "^2.5.1"
  }
```

## 7. Test

Probably it's not a bad idea to test the ESLint config locally before sharing it with the world.

Link your eslint-config module globally by running the following command at the root level of your eslint-config folder:

```bash
npm link
```

Then in the project where you'd like to test your eslint-config run:

```bash
npm link <name of your eslint-config>
```

For example, in my case I run:

```bash
npm link eslint-config-ramonak
```

Please note that you won't see any changes in the `packages.json` file after running that command. But your eslint-config will be added into `node_modules` folder.

Additionally, you need to manually install all peer dependencies (that are not present in your project) from your eslint-config package.

Something like this:

```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort prettier
```

Then you need to tell your project to use your custom eslint-config. For that,

- in `package.json` add or edit (if already exists) `eslintConfig` field:

```json
"eslintConfig": {
    "extends": [
      "ramonak" //your eslint-config module name
    ]
  }
```

- OR create `.eslintrc` file with the following content:

```json
{
  "extends": ["ramonak"] //your eslint-config module name
}
```

Now you can run linter:

```bash
npx eslint .
```

If you'd like fixable errors to be fixed automatically, run:

```bash
npx eslint . --fix
```

## 8. Publish

You need an NPM account to be able to publish your eslint-config package. If you don't have it, you can sign up [here](https://www.npmjs.com/signup).

Once you are ready to publish, just run:

```bash
npm publish
```

## 9. Integration with VSCode

1. Uninstall or disable any previously installed prettier extensions.

2. Install (if haven't already) [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

3. Edit VSCode settings by pressing CMD + SHIFT + P on Mac (or Ctrl + SHIFT + P on Windows), type `settings` and choose `Preferences: Open Settings (JSON)`. Edit or add the following settings:

```json
// Format a file on save
"editor.formatOnSave": true,
// show eslint icon at bottom toolbar
"eslint.alwaysShowStatus": true,
// turns on Auto Fix for all providers including ESLint
"editor.codeActionsOnSave": {
  "source.fixAll": true
}
```

Remove `"editor.defaultFormatter": "esbenp.prettier-vscode"` line if you had it before.

Now all fixable ESLint (including Prettier formatting options) errors will be fixed automatically on a file save.

## 10. BONUS: Add Husky and lint-staged

To enforce linting rules compliance, let's add **Husky** and **lint-staged**. These tools will automate the running of the linting scripts before each commit. If there are any lint errors, the code won't be committed. And lint-staged will help save our precious time as it will make run the lint script only for staged (e.g., files that we updated) and not on the whole project.

1. Install lint-staged and husky by running just one command:

```bash
npx mrm@2 lint-staged
```

2. Update config in `package.json`:

```json
"scripts": {
    //other scripts omitted
    "lint:fix": "eslint . --fix" //add linting script
  },
"lint-staged": {
    "*.{js,jsx,ts,tsx}": "npm run lint:fix" //run linting script only on JS and TypeScript files
  }
```

Now, whenever you try to commit any JavaScript or TypeScipt files, the linting script will run, and if there are any unresolved errors, these files won't be committed.

## Conclusion

If you want to add ESLint, TypeScript, and Prettier config into your project without any additional tooling, just follow steps 2 and 3.

If your is goal is to add ESLint, TypeScript, and Prettier with Husky and lint-staged, use steps 2, 3, and 10.

And you are very welcome to use [my custom eslint-config](https://www.npmjs.com/package/eslint-config-ramonak) and report any issues or make pull requests.

P.S. Development of my custom eslint-config inspired by [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos).
