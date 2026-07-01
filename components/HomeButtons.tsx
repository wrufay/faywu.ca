"use client";
import Link from "next/link";

export default function HomeButtons() {
  return (
    <div className="flex flex-row gap-2 sm:gap-3 justify-center items-center coding-regular fade-in-bounce-delayed text-xs sm:text-base">
      <a
        href="https://www.linkedin.com/in/fayranw/"
        target="_blank"
        className="px-3 py-2 sm:px-4 sm:py-2 bg-white hover:translate-y-[-2px] transition-transform border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100/50"
      >
        let's{" "}
        <span className="text-[var(--aritzia-blue)] coding-bold">connect!</span>
      </a>
      <Link
        href="/work"
        className="px-3 py-2 sm:px-4 sm:py-2 bg-white hover:translate-y-[-2px] transition-transform border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100/50"
      >
        see{" "}
        <span className="text-[var(--aritzia-blue)] coding-bold">my work</span>
      </Link>
    </div>
  );
}
