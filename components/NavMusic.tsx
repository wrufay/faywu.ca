"use client";

import { useEffect, useRef, useState } from "react";

type Song = {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumArt: string;
  songUrl: string;
};

export default function NavMusic() {
  const [open, setOpen] = useState(false);
  const [song, setSong] = useState<Song | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    const load = () =>
      fetch("/api/spotify")
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => setSong(d?.title ? d : null))
        .catch(() => setSong(null));
    load();
    const id = setInterval(load, 60_000);
    return () => clearInterval(id);
  }, []);

  const url =
    song?.artist === "Elspeth Eastman"
      ? `https://elspetheastman.bandcamp.com/track/${song.title
          .toLowerCase()
          .replace(/[()]/g, "")
          .replace(/\s+/g, "-")}`
      : song?.songUrl;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="text-sm sm:text-base hover:opacity-67 active:text-[var(--aritzia-blue)] cursor-pointer"
      >
        ♩
      </button>

      <div
        className={`fixed top-16 sm:top-26 left-1/2 -translate-x-1/2 z-50 nav-popover ${
          open ? "open" : ""
        }`}
      >
        <div className="max-w-lg hover:bg-gray-200 text-gray-800 text-xs rounded-full bg-gray-100 px-4 py-1.5 sm:px-6 sm:py-2 flex flex-col gap-4 items-center">
          {!song ? (
            <span className="coding-regular text-gray-400">loading...</span>
          ) : (
            <a
              href={url}
              target="_blank"
              title="Spotify link"
              className="flex text-left items-center gap-1 transition-colors fade-in active:text-[var(--aritzia-blue)]"
            >
              <span className="coding-regular lowercase">
                {song.isPlaying ? "i'm listening to" : "was just listening to"}{" "}
                <span className="coding-bold">{song.title}</span>{" "}
                {song.isPlaying ?? "right now"}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
