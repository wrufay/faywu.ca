import { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/work",
  "/work/marinepact",
  "/projects",
  "/collections",
  "/collections/gallery",
  "/collections/playlists",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://faywu.ca${route}`,
    lastModified: new Date(),
  }));
}
