"use client";

import { useState, ReactNode } from "react";

interface NotionToggleProps {
  summary: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function NotionToggle({
  summary,
  children,
  defaultOpen = false,
}: NotionToggleProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col w-full">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex flex-row items-start gap-2 text-left cursor-pointer group w-full"
      >
        <span
          className={`inline-block text-gray-400 dark:text-gray-500 text-xs mt-1 shrink-0 transition-transform ${
            open ? "rotate-90" : "rotate-0"
          }`}
        >
          ▶
        </span>
        <p className="tracking-tight text-sm sm:text-base group-hover:opacity-60 transition-opacity">
          {summary}
        </p>
      </button>

      {open && (
        <div className="flex flex-col gap-4 pl-5 mt-3 border-l border-gray-200 dark:border-stone-600 fade-in">
          {children}
        </div>
      )}
    </div>
  );
}
