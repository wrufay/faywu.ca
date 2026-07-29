import "./globals.css";
import NavLink from "@/components/NavLink";
import { Metadata } from "next";
import { ReactNode } from "react";
import Webring from "@/components/Webring";

import ViewerTracker from "@/components/ViewerTracker";
import ThemeToggle from "@/components/ThemeToggle";
import ImagePreloader from "@/components/ImagePreloader";

export const metadata: Metadata = {
  title: "Fay Wu",
  description: "Personal website somewhat inspired by Notion",
  icons: { icon: "/icons/dawg.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* here is where the HORIZONTAL (x-dir) body padding is */}
      {/* y-dir padding is unique to each page (should make this consistent perhaps) */}
      <body className="bg-amber-50/30 dark:bg-stone-900/90 text-gray-700 dark:text-gray-400 serif-regular text-center min-h-screen items-center flex flex-col px-4 sm:px-10">
        <ViewerTracker />
        <ImagePreloader />
        {/* mini nav */}
        <nav className="mt-8 sm:mt-18 flex justify-center items-center gap-6">
          <NavLink
            href="/"
            title="back home"
            className="text-sm sm:text-base hover:opacity-67 active:text-[var(--aritzia-blue)]"
          >
            ↻
          </NavLink>
          <NavLink
            href="/work"
            title="info and case studies"
            className=" text-sm sm:text-base hover:opacity-67 active:text-[var(--aritzia-blue)]"
          >
            work
          </NavLink>
          <NavLink
            href="/projects"
            title="fun trinkets i made"
            className=" text-sm sm:text-base hover:opacity-67 active:text-[var(--aritzia-blue)]"
          >
            projects
          </NavLink>
          <NavLink
            href="/collections"
            title="other stuff to look at"
            className=" text-sm sm:text-base hover:opacity-67 active:text-[var(--aritzia-blue)]"
          >
            collections
          </NavLink>
          <ThemeToggle />
        </nav>

        {children}
        <footer className="mt-auto pt-6 mb-4 sm:mb-6 text-xs text-gray-500 w-full -mx-4 sm:-mx-10">
          <div className="flex flex-col gap-2">
            <a
              href="https://www.koinyou.com/verse/1thessalonians/5/16-18"
              target="_blank"
              rel="noopener noreferrer"
              className="pen-regular text-center hover:opacity-67 w-fit mx-auto"
            >
              1 Thessalonians 5:16-18
            </a>

            <div className="relative flex items-center justify-center w-full">
              {/* edit the space between each icon here, using gap */}
              <div className="flex gap-2 sm:gap-3 items-center">
                <a
                  href="mailto:f26wu@uwaterloo.ca"
                  className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5 hover:translate-y-[-2px] active:scale-94 active:translate-y-[1px] dark:invert"
                >
                  <img src="/icons/email.png" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fayranw/"
                  target="_blank"
                  className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5 hover:translate-y-[-2px] active:scale-94 active:translate-y-[1px] dark:invert"
                >
                  <img src="/icons/linkedin.png" />
                </a>
                <div title="uw cs webring">
                  <Webring />
                </div>
                <a
                  href="https://github.com/wrufay"
                  target="_blank"
                  className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5 hover:translate-y-[-2px] active:scale-94 active:translate-y-[1px] dark:invert"
                >
                  <img src="/icons/github.png" />
                </a>
                <a
                  href="https://x.com/wrufay"
                  target="_blank"
                  className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5 hover:translate-y-[-2px] active:scale-94 active:translate-y-[1px] dark:invert"
                >
                  <img src="/icons/x.png" />
                </a>
              </div>

              {/* <div className="absolute left-0">
                <NowPlaying />
              </div> */}

              {/* <div className="absolute right-0">
                <LikeCounter />
              </div> */}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
