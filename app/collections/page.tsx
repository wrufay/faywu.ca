import CollectionsItem from "@/components/CollectionsItem";
import Link from "next/link";

export default function Collections() {
  return (
    <main className="py-10 flex flex-grow justify-center flex-col gap-10 items-center">
      
      <CollectionsItem
          name="art gallery"
          description="favourite pieces throughout the years"
          img="/projectpics/gallery.png"
          link="/collections/gallery"
          keyword="artwork"
          delay={0}
        />
      {/* <Link
            href="/message"
            className="px-3 py-2 sm:px-4 coding-regular sm:py-2 max-w-xs sm:w-xs hover:translate-y-[-2px] transition-transform border border-gray-300 text-gray-800 rounded-lg bg-[var(--sunny-yellow)]/15"
          >
            <span className="text-[var(--aritzia-blue)] ">
              question
            </span> or {" "}
            <span className="text-[var(--aritzia-blue)] ">
              suggestion?
            </span> 
          </Link> */}
    </main>
  );
}
