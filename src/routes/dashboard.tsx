import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/umeed/UmeedPages";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [
    { title: "Employee Wellness Hub | UmeedBot" },
    { name: "description", content: "Access assessments, professional support, wellness resources, AI chat, and video counselling." },
    { property: "og:title", content: "Employee Wellness Hub | UmeedBot" },
    { property: "og:description", content: "Access assessments, professional support, wellness resources, AI chat, and video counselling." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: DashboardPage,
});
