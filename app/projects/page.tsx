import { createPageMetadata } from "@/lib/site";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected full-stack engineering work across ecommerce analytics, manufacturing operations, and fintech products.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
