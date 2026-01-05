"use client";

import { useState } from "react";

export default function AboutCard({ delay = 0, title, descriptions }) {
  const [curIndex, setCurIndex] = useState(0);
  const nextExperience = () => {
    setCurIndex((prev) => (prev == descriptions.length - 1 ? 0 : prev + 1));
  };
  return (
    // card styling
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="p-6 w-2xs h-48 hover:translate-y-[-4px] transition-transform bg-white cursor-pointer shadow-sm border border-gray-100 rounded-lg animate-fade-in relative"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl sm:text-3xl">
          <span className="pen-regular text-3xl sm:text-4xl">{title}</span>
        </h1>

        {/* description */}
        {title == "future" ? (
          <p className="">
            incoming @ ??? <br />
            <span className="serif-bold">'26 co-op pending</span>
          </p>
        ) : (
          <p key={curIndex}>{descriptions[curIndex]}</p>
        )}

        {/* add the down button, allow cycling through experiences in the past and present cards*/}

        {(title == "past" || title == "present") && (
          <p className="absolute bottom-6 left-6 right-6 flex flex-row justify-between text-xs">
            <span>2021</span>
            <span
              onClick={nextExperience}
              className="select-none hover:scale-110 hover:text-[var(--aritzia-blue)]"
            >
              ▽
            </span>
          </p>
        )}

        {/* add resume button for the future card */}
        {title == "future" && (
          <button className="cursor-pointer px-3 py-2 sm:px-4 sm:py-2 bg-white transition-transform coding-regular border border-gray-300 text-gray-800 rounded-lg text-sm hover:bg-gray-100/50">
            <span className="text-[var(--aritzia-blue)]">hire me </span>(resume)
          </button>
        )}
      </div>
    </div>
  );
}
