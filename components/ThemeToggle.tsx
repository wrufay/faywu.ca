"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <button
      onClick={toggle}
      title="toggle dark mode"
      className="text-sm sm:text-base hover:opacity-67 active:text-[var(--aritzia-blue)] cursor-pointer"
    >
      {isDark ? "⏾" : "☼"}
    </button>
  );
}
