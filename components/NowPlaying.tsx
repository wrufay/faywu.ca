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
      title={song.isPlaying ? "currently listening" : "last listened to"}
      className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 transition-colors fade-in"
    >
      <span className="coding-regular overflow-hidden max-w-[100px] sm:max-w-[200px] inline-block align-middle lowercase">

        {/* wrapper for marquee animation which is activated when music is playing*/}
        <span className={song.isPlaying ? "marquee" : "whitespace-nowrap"}>
          {song.isPlaying ? "▶" : "⏸"} {song.title}
          {song.isPlaying && <>&nbsp;&nbsp;&nbsp;▶ {song.title}</>}
        </span>
      </span>
    </a>
  );
}
