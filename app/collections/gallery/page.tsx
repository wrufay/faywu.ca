"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { paintings } from "./data";

export default function Gallery() {
  const [curPainting, setCurPainting] = useState(0);
  const maxIndex = paintings.length - 1;

  const nextPic = () =>
    setCurPainting((cur) => (cur >= maxIndex ? 0 : cur + 1));
  const prevPic = () =>
    setCurPainting((cur) => (cur <= 0 ? maxIndex : cur - 1));

  const wheelLock = useRef(false);
  const handleWheel = (e: React.WheelEvent) => {
    if (wheelLock.current) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta === 0) return;
    wheelLock.current = true;
    if (delta > 0) nextPic();
    else prevPic();
    setTimeout(() => {
      wheelLock.current = false;
    }, 300);
  };

  return (
    <main className="py-10 flex flex-grow flex-col gap-4 sm:gap-6 justify-center items-center">
      {/* <h1 className="text-xs sm:text-sm w-full">
        favourites throughout the years.{" "}
      </h1> */}

      {/* painting card */}
      <div
        className="w-full max-w-sm flex flex-col gap-2 sm:gap-4 bg-white dark:bg-stone-800 shadow-sm px-8 py-6 sm:px-10 sm:py-8 border border-gray-100 dark:border-stone-700 rounded-lg fade-in"
        onWheel={handleWheel}
      >
        <p className="text-[9px] sm:text-xs  flex flex-row justify-between coding-regular">
          <span className="text-left">{paintings[curPainting].title}</span>
          <span className="text-right">
            {curPainting + 1}/{maxIndex + 1}
          </span>{" "}
        </p>
        <div className="flex flex-row justify-center items-center gap-3 sm:gap-4">
          <img
            src="/icons/leftarrow.png"
            className="opacity-41 hover:opacity-67 w-3 h-3 cursor-pointer select-none dark:invert"
            onClick={prevPic}
          />
          <Image
            key={curPainting}
            className="w-full border border-gray-200 dark:border-stone-600 opacity-90 select-none dark:brightness-75"
            src={paintings[curPainting].url}
            alt={paintings[curPainting].title}
            width={400}
            height={400}
            priority
          />
          <img
            src="/icons/rightarrow.png"
            className="opacity-41 hover:opacity-67 w-3 h-3 cursor-pointer select-none dark:invert"
            onClick={nextPic}
          />
        </div>
        <p className="text-[9px] sm:text-xs text-gray-500 dark:text-gray-500 flex flex-row justify-between coding-regular">
          <span className="text-left">
            {paintings[curPainting].year}
          </span>{" "}
          <span className="text-right">{paintings[curPainting].medium}</span>
        </p>
      </div>

      {/* Hidden preload images */}
      <div className="hidden">
        {paintings.map((painting, index) => (
          <Image
            key={painting.url}
            src={painting.url}
            alt={painting.title}
            width={400}
            height={400}
            priority={index < 3}
          />
        ))}
      </div>
    </main>
  );
}
