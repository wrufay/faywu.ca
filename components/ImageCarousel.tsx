"use client";

import { useState } from "react";
import Image from "next/image";

type Item = { src: string };

export default function ImageCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const max = items.length - 1;

  const prev = () => setIndex((i) => (i <= 0 ? max : i - 1));
  const next = () => setIndex((i) => (i >= max ? 0 : i + 1));

  return (
    <div className="flex gap-2 flex-col">
      <div className="relative overflow-hidden">
        <div
          className="flex flex-row transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <Image
              key={i}
              src={item.src}
              className="w-full object-cover shrink-0"
              width={1664}
              height={1086}
              alt=""
            />
          ))}
        </div>

        <img
          src="/icons/leftarrow.png"
          onClick={prev}
          alt="previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 opacity-41 hover:opacity-67 w-3 h-3 cursor-pointer select-none"
        />
        <img
          src="/icons/rightarrow.png"
          onClick={next}
          alt="next"
          className="absolute right-2 top-1/2 -translate-y-1/2 opacity-41 hover:opacity-67 w-3 h-3 cursor-pointer select-none"
        />
      </div>
    </div>
  );
}
