"use client";

import { useState } from "react";
import Image from "next/image";

type Item = { src: string; label?: string };

export default function ImageCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const max = items.length - 1;

  const prev = () => setIndex((i) => (i <= 0 ? max : i - 1));
  const next = () => setIndex((i) => (i >= max ? 0 : i + 1));

  return (
    <div className="flex gap-2 flex-col">
      <div className="relative overflow-hidden shadow-sm">
        <div
          className="flex flex-row transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="relative w-full shrink-0">
              <Image
                src={item.src}
                className="w-full object-cover dark:brightness-75"
                width={1664}
                height={1086}
                alt=""
              />
              {item.label && (
                <span className="absolute top-3 left-3 bg-black/60 text-white text-xs coding-regular px-2 py-1 rounded-md">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          aria-label="previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-white/70 hover:bg-white/90 shadow-sm cursor-pointer"
        >
          <img
            src="/icons/leftarrow.png"
            alt=""
            className="w-3 h-3 opacity-67 select-none"
          />
        </button>
        <button
          onClick={next}
          aria-label="next"
          className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-white/70 hover:bg-white/90 shadow-sm cursor-pointer"
        >
          <img
            src="/icons/rightarrow.png"
            alt=""
            className="w-3 h-3 opacity-67 select-none"
          />
        </button>
      </div>
    </div>
  );
}
