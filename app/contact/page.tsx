import type { Metadata } from "next";
import ContactForm from "../components/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kate Ramonak — full-stack engineer.",
};

export default function ContactPage() {
  return <ContactForm />;
}
