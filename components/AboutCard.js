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
      className="px-4 py-8 sm:p-8 w-full max-w-2xs md:w-2xs h-48 hover:translate-y-[-4px] transition-transform bg-white cursor-pointer shadow-sm border border-gray-100 rounded-lg animate-fade-in relative"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl sm:text-3xl">
          <span className="pen-regular text-3xl sm:text-4xl">{title}</span>
        </h1>

        {/* description */}
        <div>
          {title == "future" ? (
            <p className="text-sm">2026 co-op pending</p>
          ) : (
            <p key={curIndex} className="animate-scroll-up text-sm">
              {descriptions[curIndex].description}
            </p>
          )}

          {/* add tags only for the present card (might change it later) */}
          {/* also this could just be hard coded since its only used here lol */}
          {/* also you could make the tag into a custom component */}
          {title == "present" && descriptions[curIndex].tags && (
            <div key={`tags-${curIndex}`} className="flex flex-wrap gap-2 justify-center mt-1 animate-scroll-up">
              {descriptions[curIndex].tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-gray-200 px-2 py-0.5 sm:py-1 sm:px-2.5 text-xs text-gray-500 bg-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* add the down button, allow cycling through experiences in the past and present cards*/}

        {(title == "past" || title == "present") && (
          <p className="absolute bottom-6 left-6 right-6 flex flex-row items-center justify-between text-xs text-[var(--aritzia-blue)] coding-regular">
            <span>{descriptions[curIndex].year}</span>
            <img
              onClick={nextExperience}
              className="select-none hover:scale-110 w-3 h-3"
              src="/arrowdown.png"
            />
          </p>
        )}

        {/* add resume button for the future card */}
        {title == "future" && (
          <a
            href="https://drive.google.com/file/d/1IK1cd7bbhFNEUXKcY5QIXNgciX4qh4J0/view?usp=sharing"
            target="_blank"
            className="self-center w-auto cursor-pointer px-3 py-2 sm:px-4 sm:py-2 bg-white transition-transform coding-regular border border-gray-300 text-[var(--aritzia-blue)] rounded-lg text-sm hover:bg-gray-100/50"
          >
            hire me (resume)
          </a>
        )}
      </div>
    </div>
  );
}
