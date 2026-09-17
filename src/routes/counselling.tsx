import { createFileRoute } from "@tanstack/react-router";
import { CounsellingPage } from "@/components/umeed/UmeedPages";

export const Route = createFileRoute("/counselling")({
  head: () => ({ meta: [
    { title: "Professional Counselling | UmeedBot" },
    { name: "description", content: "Meet compassionate professional counsellors and book personalized support." },
    { property: "og:title", content: "Professional Counselling | UmeedBot" },
    { property: "og:description", content: "Meet compassionate professional counsellors and book personalized support." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CounsellingPage,
});
