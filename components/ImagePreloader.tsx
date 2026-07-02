"use client";
import { paintings } from "@/app/gallery/data";

const projectImages = [
  "/projectpics/koinyou.png",
  "/projectlogos/koinyoulogo.png",
  "/projectpics/best.png",
  "/projectlogos/projectoriginlogo.png",
  "/projectpics/uwsleeper.png",
  "/projectlogos/uwsleeperlogo.png",
  "/projectpics/coco.png",
  "/projectlogos/cocologo.png",
  "/projectpics/firstloved.png",
  "/projectlogos/flowerlogo.png",
  "/projectpics/clearpharma.png",
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
