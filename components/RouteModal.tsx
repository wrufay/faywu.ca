"use client";

import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface RouteModalProps {
  children: ReactNode;
  // when reached via a direct visit (no /projects loaded behind it to pop
  // back to), pass the path to navigate to on close instead of router.back()
  closeTo?: string;
}

export default function RouteModal({ children, closeTo }: RouteModalProps) {
  const router = useRouter();

  const close = () => (closeTo ? router.push(closeTo) : router.back());

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 fade-in"
      onClick={close}
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
