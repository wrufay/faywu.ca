"use client";
import { usePathname } from "next/navigation";
import { paintings } from "@/app/collections/gallery/data";

const projectImages = [
  "/projectpics/paintapint.webp",
  "/projectlogos/paintapintlogo.webp",
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

const projectSlugs = ["/projects", "/paint", "/origin", "/sleeper", "/coco", "/bible", "/clearpharma"];

export default function ImagePreloader() {
  const pathname = usePathname();

  // only pay for these eager preloads on the pages that actually need them,
  // instead of ~5MB of images downloading on every single page load
  const onGalleryPage = pathname.startsWith("/collections");
  const onProjectsPage = projectSlugs.some((p) => pathname === p);

  if (!onGalleryPage && !onProjectsPage) return null;

  return (
    <div className="hidden" aria-hidden>
      {onGalleryPage &&
        paintings.map((p) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={p.url} src={p.url} alt="" fetchPriority="low" />
        ))}
      {onProjectsPage &&
        projectImages.map((src) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt="" fetchPriority="low" />
        ))}
    </div>
  );
}
