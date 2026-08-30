import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from Fay Wu's software engineering work.",
};

export default function Work() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center py-10 max-w-2xl mx-auto w-full">
      <Link
        href="/work/marinepact"
        className="w-full group fade-in hover:translate-y-[-4px] transition-transform"
      >
        <div className="relative w-full">
          <video
            src="/demos/vessels.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-72 sm:h-96 rounded-t-lg object-cover select-none dark:brightness-75"
          />
          <img
            src="/demos/canada.jpeg"
            alt=""
            className="absolute -bottom-8 left-6 sm:left-8 w-12 sm:w-18 object-cover border rounded-lg border-gray-200 dark:border-stone-600 select-none dark:brightness-75"
          />
        </div>

        <section className="px-6 sm:px-8 pt-10 sm:pt-12 pb-3 sm:pb-6 flex flex-col w-full rounded-b-lg  bg-white dark:bg-stone-800 shadow-sm transition-shadow group-hover:shadow-md">
          <h1 className="serif-bold italic text-xl sm:text-2xl text-gray-700 dark:text-gray-400 text-left mb-6">
            bringing{" "}
            <span className="pen-regular tracking-tight border-b-2 border-[var(--crimson-red)]/67">
              interactivity
            </span>{" "}
            to research workflows at <span className="text-[var(--aritzia-blue)] coding-bold">DFO</span>
          </h1>

          <div className="flex flex-col gap-1">
            {[
              {
                label: "work",
                value: "Internship",
              },
              {
                label: "role",
                value: "Research Assistant",
              },
              {
                label: "date",
                value: "May 2026 - Aug 2026",
              },
            ].map((row) => (
              <div
                key={row.label}
                className="flex flex-row items-center gap-0 sm:gap-3 py-1 sm:py-1.5"
              >
                <span className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm w-18 sm:w-24 flex items-center gap-2 shrink-0">
                  {row.label}
                </span>
                <span className="text-gray-800 dark:text-gray-300 text-xs sm:text-sm">
                  {row.value}
                </span>
              </div>
            ))}
            <p className="text-right text-xs sm:text-sm text-gray-400 dark:text-gray-500 mt-4 sm:mt-0">
              click for full story!
            </p>
          </div>
        </section>
      </Link>
    </main>
  );
}
