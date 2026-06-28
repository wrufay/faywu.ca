"use client";
import { useState } from "react";

export default function MyWork() {
  const [sent, setSent] = useState(false);

  const nudge = async () => {
    if (sent) return;
    await fetch("https://ntfy.sh/hevwfaindlabd", {
      method: "POST",
      body: "ADD WORK PAGE 2 WEBSITE kekw",
    });
    setSent(true);
  };

  return (
    <main className="flex flex-grow flex-col gap-6 items-center justify-center py-10">
      <p className="serif-bold text-gray-700">
        ⬢ this page is under construction.{" "}
      </p>
      <button
        onClick={nudge}
        disabled={sent}
        className="px-3 py-2 sm:px-4 sm:py-2 bg-white hover:translate-y-[-2px] hover:cursor-pointer transition-transform border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100/50 disabled:opacity-50 disabled:cursor-default"
      >
        {sent ? (
          "thanks"
        ) : (
          <>
            nudge{" "}
            <span className="text-[var(--aritzia-blue)] coding-bold">fay</span>{" "}
            to work on this
          </>
        )}
      </button>
    </main>
  );
}
