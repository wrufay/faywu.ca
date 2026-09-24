"use client";

import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

export default function RouteModal({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 fade-in"
      onClick={() => router.back()}
    >
      <div
        className="bg-white dark:bg-stone-800 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 pt-6">{children}</div>
      </div>
    </div>
  );
}
