import CollectionsItem from "@/components/CollectionsItem";

export default function Collections() {
  return (
    <main className="py-10 flex flex-grow justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* only gonna be like 2 items so not gomnna put an array */}
        <CollectionsItem
          name="notebook"
          description="i like to ponder"
          img="/projectpics/blog.png"
          keyword="writing"
          delay={0}
          link="/collections/notebook"
        ></CollectionsItem>
        <CollectionsItem
          name="art gallery"
          description="favourite pieces throughout the years ☺︎"
          img="/projectpics/gallery.png"
          link="/collections/gallery"
          keyword="artwork"
          delay={300}
        ></CollectionsItem>
      </div>
    </main>
  );
}
