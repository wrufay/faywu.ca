import { PlaylistEntry } from "@/app/collections/playlists/data";

function renderDescription(text: string) {
  return text.split(/\*(.+?)\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function PlaylistRow({
  title,
  playlistUrl,
  description,
}: PlaylistEntry) {
  return (
    <div className="border-b border-gray-100 dark:border-stone-800 py-3 flex flex-col gap-1 sm:grid sm:grid-cols-[9rem_1fr_2.5rem] sm:items-start sm:gap-0 text-left">
      <div className="flex items-center justify-between sm:contents">
        <span className="coding-bold text-sm text-gray-800 dark:text-gray-300 text-left sm:order-1 sm:pr-4">
          {title}
        </span>
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-[var(--aritzia-blue)] hover:opacity-67 transition-opacity sm:order-3"
        >
          ♫
        </a>
      </div>
      <div className="tracking-tight text-xs sm:text-sm text-gray-600 dark:text-gray-400 sm:order-2 sm:pr-4">
        {renderDescription(description)}
      </div>
    </div>
  );
}
