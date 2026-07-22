"use client";
import { paintings } from "@/app/collections/gallery/data";

const projectImages = [
  "/projectpics/koinyou.webp",
  "/projectlogos/koinyoulogo.png",
  "/projectpics/best.webp",
  "/projectlogos/projectoriginlogo.png",
  "/projectpics/uwsleeper.webp",
  "/projectlogos/uwsleeperlogo.png",
  "/projectpics/coco.webp",
  "/projectlogos/cocologo.png",
  "/projectpics/firstloved.webp",
  "/projectlogos/flowerlogo.png",
  "/projectpics/clearpharma.webp",
];

export default function ImagePreloader() {
  return (
    <div className="hidden" aria-hidden>
      {paintings.map((p) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={p.url} src={p.url} alt="" fetchPriority="low" />
      ))}
      {projectImages.map((src) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={src} src={src} alt="" fetchPriority="low" />
      ))}
    </div>
  );
}
