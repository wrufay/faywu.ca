import CollectionsItem from "@/components/CollectionsItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
  description: "Other stuff to look at — playlists, art, and more.",
};

export default function Collections() {
  return (
    <main className="py-10 flex flex-grow justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <CollectionsItem
          name="playlists"
          description="curated youtube playlists i've discovered, for every season. "
          img="/projectpics/music.webp"
          keyword="music"
          link="/collections/playlists"
          delay={300}
        />
        <CollectionsItem
          name="gallery"
          description="some of my favourite art pieces throughout the years"
          img="/projectpics/gallery.webp"
          keyword="artwork"
          link="/collections/gallery"
          delay={300}
        />
      </div>
    </main>
  );
}
