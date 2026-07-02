"use client";

import { useState } from "react";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import { paintings } from "./data";

export default function Test() {
  const mediums = [
    "all",
    ...Array.from(new Set(paintings.map((p) => p.medium.split(" on ")[0]))),
  ];
  const years = [
    "all",
    ...Array.from(new Set(paintings.map((p) => p.year))).sort(),
  ];
  const [mediumFilter, setMediumFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const filtered = paintings.filter(
    (p) =>
      (mediumFilter === "all" || p.medium.startsWith(mediumFilter)) &&
      (yearFilter === "all" || p.year === yearFilter)
  );

  const [curPainting, setCurPainting] = useState(0);
  const maxIndex = filtered.length - 1;

  const nextPic = () =>
    setCurPainting((cur) => (cur >= maxIndex ? 0 : cur + 1));
  const prevPic = () =>
    setCurPainting((cur) => (cur <= 0 ? maxIndex : cur - 1));

  const selectMedium = (m: string) => {
    setMediumFilter(m);
    setCurPainting(0);
  };
  const selectYear = (y: string) => {
    setYearFilter(y);
    setCurPainting(0);
  };

  return (
    <main className="py-10 flex flex-grow flex-col gap-4 sm:gap-6 justify-center items-center">
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-xs sm:text-sm text-left flex-1">
          pieces throughout the years.{" "}
        </h1>
        <div className="max-w-sm flex justify-end items-center gap-2">
          <Dropdown
            options={mediums}
            value={mediumFilter}
            onChange={selectMedium}
            placeholder="medium"
            className="border-none !text-gray-400 !p-0"
          />
          <Dropdown
            options={years}
            value={yearFilter}
            onChange={selectYear}
            placeholder="year"
            className="border-none !text-gray-400 !p-0"
          />
        </div>
      </div>

      {/* painting card */}
      {filtered.length === 0 ? (
        <div className="w-full max-w-sm flex flex-col gap-2 sm:gap-4 bg-white shadow-sm px-8 py-6 sm:px-10 sm:py-8 border border-gray-100 rounded-lg">
          <div className="relative">
            <Image
              src="/paintings/non.jpeg"
              alt="no results"
              width={400}
              height={400}
              className="w-full border border-gray-200 opacity-67"
            />
            <p className="absolute inset-0 flex items-center justify-center text-xs serif-regular text-white drop-shadow">
              no paintings found. try a different filter
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-sm flex flex-col gap-2 sm:gap-4 bg-white shadow-sm px-8 py-6 sm:px-10 sm:py-8 border border-gray-100 rounded-lg fade-in">
          <p className="text-[9px] sm:text-xs text-[var(--aritzia-blue)]/67 flex flex-row justify-between coding-regular">
            <span className="text-left">{filtered[curPainting].title}</span>
            <span className="text-right">
              {curPainting + 1}/{maxIndex + 1}
            </span>{" "}
          </p>
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-4">
            <img
              src="/icons/leftarrow.png"
              className="opacity-41 hover:opacity-67 w-3 h-3 cursor-pointer select-none"
              onClick={prevPic}
            />
            <Image
              key={curPainting}
              className="w-full border border-gray-200 opacity-90 select-none"
              src={filtered[curPainting].url}
              alt={filtered[curPainting].title}
              width={400}
              height={400}
              priority
            />
            <img
              src="/icons/rightarrow.png"
              className="opacity-41 hover:opacity-67 w-3 h-3 cursor-pointer select-none"
              onClick={nextPic}
            />
          </div>
          <p className="text-[9px] sm:text-xs text-gray-500 flex flex-row justify-between coding-regular">
            <span className="text-left text-[var(--aritzia-blue)]/67">
              created in {filtered[curPainting].year}
            </span>{" "}
            <span className="text-right">{filtered[curPainting].medium}</span>
          </p>
        </div>
      )}

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
