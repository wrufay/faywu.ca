import CollectionsItem from "@/components/CollectionsItem";

export default function Collections() {
  return (
    <main className="py-10 flex flex-grow flex-col gap-8 justify-center items-center">
      {/* only gonna be like 2 items so not gomnna put an array */}
      <CollectionsItem
        name="blog"
        description="words and thoughts, sometimes coherently put together"
        img="/projectpics/blog.png"
        keyword="writing"
        delay={0}
      ></CollectionsItem>
      <CollectionsItem
        name="gallery"
        description="some of my favourite art pieces throughout the years"
        img="/projectpics/gallery.png"
        keyword="artwork"
        delay={300}
      ></CollectionsItem>
    </main>
  );
}
