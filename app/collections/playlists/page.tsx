import { playlists } from "./data";
import PlaylistRow from "@/components/PlaylistRow";

export default function Playlists() {
  return (
    <main className="py-10 px-6 sm:px-8 flex flex-grow justify-center w-full">
      <div className="max-w-3xl w-full flex flex-col gap-4">
        <p className="text-right text-xs sm:text-sm mb-4 sm:mb-8 sm:mt-8 mt-4 dark:text-white dark:bg-transparent dark:border-b dark:border-[var(--aritzia-blue)] bg-[var(--sunny-yellow)]/21 w-fit ml-auto px-1">
          if a picture's worth a thousand words, then a cinematic playlist is
          worth a million.
        </p>
        <div className="flex flex-col">
          {playlists.map((p, i) => (
            <PlaylistRow key={p.title} {...p} delay={i * 100} />
          ))}
        </div>
      </div>
    </main>
  );
}
