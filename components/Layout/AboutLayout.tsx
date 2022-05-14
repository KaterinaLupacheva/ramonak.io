import Layout from "components/Layout";
import Image from "next/image";
import {
  AboutWrapper,
  ContentWrapper,
  ImageWrapper,
} from "./AboutLayout.styles";
import photo from "../../public/static/images/photo1.jpg";

export default function AboutLayout({ children }) {
  const meta = {
    title: "About me",
    description: "About me",
    type: "article",
  };
  return (
    <Layout meta={meta}>
      <h1>About me</h1>
      <AboutWrapper>
        <ContentWrapper>{children}</ContentWrapper>
        <ImageWrapper>
          <Image src={photo} alt="my photo" />
        </ImageWrapper>
      </AboutWrapper>
    </Layout>
  );
}
