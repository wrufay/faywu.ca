import CollectionsItem from "@/components/CollectionsItem";

export default function Collections() {
  return (
    <main className="py-10 flex flex-grow flex-col gap-4 sm:gap-6 justify-center items-center">
      <CollectionsItem
        name="blog"
        description="words and thoughts, sometimes coherently put together"
        img="/projectpics/blog.png"
      ></CollectionsItem>
      <CollectionsItem
        name="gallery"
        description="some of my favourite art pieces throughout the years"
        img="/projectpics/gallery.png"
      ></CollectionsItem>
    </main>
  );
}
