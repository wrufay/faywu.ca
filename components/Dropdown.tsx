"use client";

import { useState, useRef, useEffect } from "react";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function Dropdown({ options, value, onChange, placeholder, className }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`text-xs coding-regular border border-gray-300 rounded-lg px-2 py-1 text-gray-500 bg-[#fffef9] flex items-center gap-1 cursor-pointer ${className ?? ""}`}
      >
        {value === "all" && placeholder ? placeholder : value}
        <span
          className="text-[10px] inline-block"
          style={{ transition: "transform 0.3s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 nav-collapse ${open ? "open" : ""}`}>
        <div className="flex flex-col items-center border border-gray-200 rounded-lg bg-[#fffef9] text-xs coding-regular min-w-max">
          {options.map((opt, i) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full px-3 py-1 text-left cursor-pointer text-gray-600 hover:text-gray-500 hover:bg-[var(--aritzia-blue)]/10
                ${i === 0 ? "rounded-t-lg" : ""}
                ${i === options.length - 1 ? "rounded-b-lg" : "border-b border-gray-100"}
                ${opt === value ? "text-[var(--aritzia-blue)]" : ""}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
