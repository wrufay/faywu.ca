"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function NavMore() {
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
        className="text-sm sm:text-base hover:opacity-67 cursor-pointer flex items-center gap-1"
      >
        more
        <span
          className="text-xs sm:text-sm inline-block"
          style={{
            display: "inline-block",
            transition: "transform 0.3s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▾
        </span>
      </button>
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 nav-collapse ${open ? "open" : ""}`}>
        <div className="flex flex-col items-center border border-gray-200 rounded-lg bg-[#fffef9] text-xs sm:text-sm min-w-max">
          <Link
            href="/about"
            className="hover:text-gray-500 hover:bg-[var(--aritzia-blue)]/20 border-b border-gray-200 w-full px-2 py-1 rounded-t-lg"
            onClick={() => setOpen(false)}
          >
            about
          </Link>
          <Link
            href="/gallery"
            className="hover:text-gray-500 hover:bg-[var(--crimson-red)]/20 w-full px-2 py-1"
            onClick={() => setOpen(false)}
          >
            gallery
          </Link>
          <Link
            href="/sandbox"
            className="hover:text-gray-500 /20 border-t hover:bg-[var(--sunny-yellow)]/20 border-gray-200 w-full px-2 py-1 rounded-b-lg"
            onClick={() => setOpen(false)}
          >
            sandbox
          </Link>
        </div>
      </div>
    </div>
  );
}
