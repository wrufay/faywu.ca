"use client";

import { useState, ReactNode } from "react";

interface NotionToggleProps {
  label: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function NotionToggle({
  label,
  children,
  defaultOpen = false,
}: NotionToggleProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col w-full">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex flex-row items-center gap-3 w-fit text-left cursor-pointer group"
      >
        <span
          className={`inline-block text-gray-400 text-xs transition-transform ${
            open ? "rotate-90" : "rotate-0"
          }`}
        >
          ▶
        </span>
        <span className="tracking-tight text-gray-500 group-hover:opacity-70">
          {label}
        </span>
      </button>

      {open && (
        <div className="flex flex-col gap-4 pl-5 mt-3 border-l border-gray-200 fade-in">
          {children}
        </div>
      )}
    </div>
  );
}
