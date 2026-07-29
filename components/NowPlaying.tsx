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
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => setSong(d?.title ? d : null))
        .catch(() => setSong(null));
    load();
    const id = setInterval(load, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!song)
    return (
      <span className="text-xs coding-regular text-gray-400 dark:text-gray-600">
        no music playing
      </span>
    );

  const url =
    song.artist === "Elspeth Eastman"
      ? `https://elspetheastman.bandcamp.com/track/${song.title
          .toLowerCase()
          .replace(/[()]/g, "")
          .replace(/\s+/g, "-")}`
      : song.songUrl;

  return (
    <a
      href={url}
      target="_blank"
      title={song.isPlaying ? "currently listening" : "last listened to"}
      className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors fade-in"
    >
      <span className="coding-regular overflow-hidden max-w-[67px] sm:max-w-[167px] inline-block align-middle lowercase">
        {/* wrapper for marquee animation which is activated when music is playing*/}
        <span className="marquee">
          {song.isPlaying ? "▶" : "⬢"} {song.title}&nbsp;&nbsp;&nbsp;
          {song.isPlaying ? "▶" : "⬢"} {song.title}
        </span>
      </span>
    </a>
  );
}
