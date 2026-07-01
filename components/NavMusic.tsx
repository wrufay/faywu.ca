"use client";
import { useState, useEffect, useRef } from "react";

export default function NavMusic() {
  const [open, setOpen] = useState(false);
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

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="text-sm sm:text-base hover:opacity-67 cursor-pointer"
      >
        ♩
      </button>
      <div className={`fixed top-16 sm:top-26 left-1/2 -translate-x-1/2 z-50 nav-popover ${open ? "open" : ""}`}>
        <iframe
          className="h-[120px] w-[280px] shadow-md "
          src="https://bandcamp.com/EmbeddedPlayer/album=1894914042/size=large/bgcol=ffffff/linkcol=333333/artwork=none/track=134381612/transparent=true/"
          seamless
        />
      </div>
    </div>
  );
}
