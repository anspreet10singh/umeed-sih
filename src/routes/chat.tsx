import { createFileRoute } from "@tanstack/react-router";
import { ChatPage } from "@/components/umeed/UmeedPages";

export const Route = createFileRoute("/chat")({
  head: () => ({ meta: [
    { title: "AI Student Counsellor | UmeedBot" },
    { name: "description", content: "Talk with the UmeedBot AI student counsellor about academics, career, stress, or motivation." },
    { property: "og:title", content: "AI Student Counsellor | UmeedBot" },
    { property: "og:description", content: "Talk with the UmeedBot AI student counsellor about academics, career, stress, or motivation." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ChatPage,
});
