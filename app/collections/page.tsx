import CollectionsItem from "@/components/CollectionsItem";

export default function Collections() {
  return (
    <main className="py-10 flex flex-grow justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <CollectionsItem
          name="library"
          description="stuff i've read before, and in the process of reading"
          img="/projectpics/blog.webp"
          keyword="books"
          link="/collections/library"
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
