"use client";

import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

export default function WriteupOverlay({ children }: { children: ReactNode }) {
  const router = useRouter();

  const close = () => router.back();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-amber-50/96 dark:bg-stone-900/96 fade-in px-4 sm:px-10"
      onClick={close}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] text-gray-700 dark:text-gray-400 rounded-full w-9 h-9 flex items-center justify-center hover:opacity-67"
        aria-label="close"
      >
        ✕
      </button>

      <div
        className="text-left flex flex-col items-start justify-start py-10 max-w-2xl mx-auto w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
