import CollectionsItem from "@/components/CollectionsItem";

export default function Collections() {
  return (
    <main className="py-10 flex flex-grow flex-col gap-4 sm:gap-6 justify-center items-center">
      <CollectionsItem name="blog"></CollectionsItem>
      <CollectionsItem name="gallery"></CollectionsItem>
    </main>
  );
}
