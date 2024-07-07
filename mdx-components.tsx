import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image {...(props as ImageProps)} />
    ),
    ...components,
  };
}
