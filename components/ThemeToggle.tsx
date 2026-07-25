"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      title="toggle dark mode"
      className="text-sm sm:text-base hover:opacity-67 active:text-[var(--aritzia-blue)] cursor-pointer"
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}
