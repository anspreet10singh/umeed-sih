import { createFileRoute } from "@tanstack/react-router";
import { VideoPage } from "@/components/umeed/UmeedPages";

export const Route = createFileRoute("/video")({
  head: () => ({ meta: [
    { title: "Video Counselling | UmeedBot" },
    { name: "description", content: "Start or join a private UmeedBot video counselling meeting." },
    { property: "og:title", content: "Video Counselling | UmeedBot" },
    { property: "og:description", content: "Start or join a private UmeedBot video counselling meeting." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: VideoPage,
});
