import CollectionsItem from "@/components/CollectionsItem";
import Link from "next/link";

export default function Collections() {
  return (
    <main className="py-10 flex flex-grow justify-center flex-col gap-10 items-center">
      <Link
            href="/message"
            className="px-3 py-2 sm:px-4 bg-white sm:py-2 hover:translate-y-[-2px] transition-transform border border-gray-300 text-gray-800 rounded-lg hover:bg-[var(--sunny-yellow)]/15"
          >
            send a{" "}
            <span className="text-[var(--aritzia-blue)] coding-bold">
              message
            </span>
          </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      
        {/* only gonna be like 2 items so not gomnna put an array */}
        <CollectionsItem
          name="notebook"
          description="pondering, writing and everything in between"
          img="/projectpics/blog.png"
          keyword="writing"
          delay={0}
          link="/collections/notebook"
        ></CollectionsItem>
        <CollectionsItem
          name="art gallery"
          description="favourite pieces throughout the years "
          img="/projectpics/gallery.png"
          link="/collections/gallery"
          keyword="artwork"
          delay={300}
        ></CollectionsItem>
      </div>
    </main>
  );
}
