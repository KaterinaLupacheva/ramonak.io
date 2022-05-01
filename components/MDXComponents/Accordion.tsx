import { serialize } from "next-mdx-remote/serialize";
import { PropsWithChildren } from "react";

type AccordionProps = {
  summaryText: string;
};

export default function Accordion({
  summaryText,
  children,
}: PropsWithChildren<AccordionProps>) {
  return (
    <details>
      <summary>{summaryText}</summary>
      <div>{children}</div>
    </details>
  );
}
