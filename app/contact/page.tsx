import { createPageMetadata } from "@/lib/site";
import ContactForm from "../components/ContactForm/ContactForm";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Kate about full-stack engineering roles, products, and collaborations.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactForm />;
}
