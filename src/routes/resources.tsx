import { createFileRoute } from "@tanstack/react-router";
import { ResourcesPage } from "@/components/umeed/UmeedPages";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [
    { title: "Counselling Resource Hub | UmeedBot" },
    { name: "description", content: "Explore supportive videos for career, relationships, loneliness, stress, trauma, and self-worth." },
    { property: "og:title", content: "Counselling Resource Hub | UmeedBot" },
    { property: "og:description", content: "Explore supportive videos for career, relationships, loneliness, stress, trauma, and self-worth." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ResourcesPage,
});
