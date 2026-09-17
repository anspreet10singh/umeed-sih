import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/components/umeed/UmeedPages";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [
    { title: "Student Wellness Hub | UmeedBot" },
    { name: "description", content: "Log in or create your UmeedBot student wellness account." },
    { property: "og:title", content: "Student Wellness Hub | UmeedBot" },
    { property: "og:description", content: "Log in or create your UmeedBot student wellness account." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LoginPage,
});
