import Link from "next/link";

import NextImage from "./Image";
import Accordion from "./Accordion";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}> {props.children} </a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image: NextImage,
  a: CustomLink,
  Accordion,
};

export default MDXComponents;
