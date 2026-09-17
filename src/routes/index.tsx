import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/umeed/UmeedPages";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "UmeedBot | College Mental Health Support" },
    { name: "description", content: "Stigma-free digital mental health support designed for college students." },
    { property: "og:title", content: "UmeedBot | College Mental Health Support" },
    { property: "og:description", content: "Stigma-free digital mental health support designed for college students." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});
