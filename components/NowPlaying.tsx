"use client";
import { useEffect, useState } from "react";

type Song = {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumArt: string;
  songUrl: string;
};

export default function NowPlaying() {
  const [song, setSong] = useState<Song | null>(null);

  useEffect(() => {
    const load = () =>
      fetch("/api/spotify")
        .then((r) => r.json())
        .then((d) => setSong(d.title ? d : null));
    load();
    const id = setInterval(load, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!song) return null;

  return (
    <a
      href={song.songUrl}
      target="_blank"
      className="group flex items-center gap-2 bg-white hover:bg-gray-100/50 hover:translate-y-[-2px] transition-transform border border-gray-300 text-gray-800 rounded-lg px-3 py-2 sm:px-4 sm:py-2 w-full"
    >
      <img
        src={song.albumArt}
        className="w-5 h-5 sm:w-6 sm:h-6 rounded-sm flex-shrink-0 opacity-67 group-hover:opacity-100"
        alt={song.title}
      />
      <div className="text-left min-w-0">
        <p className="text-[8px] sm:text-[9px] text-gray-400 coding-regular leading-tight">
          {song.isPlaying ? "▶ now playing" : "last played"}
        </p>
        <p className="text-[10px] sm:text-[11px] text-gray-700 truncate leading-tight lowercase">
          {song.title}
        </p>
      </div>
    </a>
  );
}
