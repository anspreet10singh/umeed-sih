import { createFileRoute } from "@tanstack/react-router";
import { CounsellingFormPage } from "@/components/umeed/UmeedPages";

export const Route = createFileRoute("/counselling-form")({
  head: () => ({ meta: [
    { title: "Book a Counselling Session | UmeedBot" },
    { name: "description", content: "Request a confidential online or in-person counselling appointment." },
    { property: "og:title", content: "Book a Counselling Session | UmeedBot" },
    { property: "og:description", content: "Request a confidential online or in-person counselling appointment." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CounsellingFormPage,
});
