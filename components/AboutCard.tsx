"use client";

import { useState, ReactNode } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import React from "react";

interface Description {
  description: string | ReactNode;
  year: string;
  tags?: string[];
}

interface AboutCardProps {
  delay?: number;
  title: string;
  descriptions: Description[];
  imgLink: string;
  bgColour: string;
}

export default function AboutCard({
  delay = 0,
  title,
  descriptions,
  imgLink,
  bgColour,
}: AboutCardProps) {
  // hover animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [curIndex, setCurIndex] = useState(0);
  const nextExperience = () => {
    setCurIndex((prev) => (prev == descriptions.length - 1 ? 0 : prev + 1));
  };

  return (
    // card styling
    <div
      onMouseMove={handleMouseMove}
      style={{ animationDelay: `${delay}ms` }}
      className="group px-4 py-8 sm:p-8 w-full max-w-2xs md:w-2xs h-50 transition-transform bg-white dark:bg-stone-800 cursor-pointer shadow-sm border border-gray-100 dark:border-stone-900 rounded-lg fade-in relative overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              150px circle at ${mouseX}px ${mouseY}px,
              ${bgColour},
              transparent 80%
            )
          `,
        }}
      />
      <div className="flex flex-col gap-3 relative z-10">
        <h1 className="text-2xl sm:text-3xl flex flex-row justify-center items-center gap-3">
          <img src={imgLink} className="w-8 h-8 opacity-67 dark:invert" />
          <span className="pen-regular text-3xl sm:text-4xl">{title}</span>
        </h1>

        {/* description */}
        <div>
          {title == "future" ? (
            <p className="text-sm">seeking winter 2027 co-op!</p>
          ) : (
            <p key={curIndex} className="animate-scroll-up text-sm">
              {descriptions[curIndex].description}
            </p>
          )}

          {/* add tags only for the present card (might change it later) */}
          {/* also this could just be hard coded since its only used here lol */}
          {/* also you could make the tag into a custom component */}
          {title == "present" && descriptions[curIndex].tags && (
            <div
              key={`tags-${curIndex}`}
              className="flex flex-wrap gap-2 justify-center mt-1 animate-scroll-up"
            >
              {descriptions[curIndex].tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-gray-200 dark:border-stone-600 px-2 py-0.5 sm:py-1 sm:px-2.5 text-xs text-gray-500 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* add resume button for the future card */}
        {title == "future" && (
          <a
            href="https://drive.google.com/file/d/1zYYHXVqiO7PXd4fT8uIa3KpWvoMADe2t/view?usp=sharing"
            target="_blank"
            className="self-center w-auto cursor-pointer px-3 py-2 sm:px-4 sm:py-2 bg-white dark:bg-stone-900 transition-colors coding-regular border border-gray-300 dark:border-stone-900 text-[var(--aritzia-blue)] rounded-lg text-sm hover:bg-[var(--sunny-yellow)]/15 hover:dark:border-stone-700 dark:hover:bg-stone-900 active:dark:bg-stone-800"
          >
            view my resume
          </a>
        )}
      </div>

      {/* add the down button, allow cycling through experiences in the past and present cards*/}
      {(title == "past" || title == "present") && (
        <p className="absolute bottom-6 left-6 right-6 flex flex-row items-center justify-between text-xs text-[var(--aritzia-blue)] coding-regular z-10">
          <span>{descriptions[curIndex].year}</span>
          <img
            onClick={nextExperience}
            className="select-none hover:scale-110 w-6 h-6 bg-[color-mix(in_srgb,var(--aritzia-blue)_15%,transparent)] p-1 rounded-full shadow-sm active:shadow-none active:translate-y-[1px]"
            src="/icons/arrowdown.png"
          />
        </p>
      )}
    </div>
  );
}
