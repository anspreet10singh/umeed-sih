import { createFileRoute } from "@tanstack/react-router";
import { QuizPage } from "@/components/umeed/UmeedPages";

export const Route = createFileRoute("/quiz")({
  head: () => ({ meta: [
    { title: "Mood Self-Assessment | UmeedBot" },
    { name: "description", content: "Complete a private mood self-assessment and find the right next step." },
    { property: "og:title", content: "Mood Self-Assessment | UmeedBot" },
    { property: "og:description", content: "Complete a private mood self-assessment and find the right next step." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: QuizPage,
});
