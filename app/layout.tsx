import "./globals.css";
import Link from "next/link";
import LikeCounter from "@/components/LikeCounter";
import { Metadata } from "next";
import { ReactNode } from "react";
import Webring from "@/components/Webring";
import ViewerTracker from "@/components/ViewerTracker";
import NowPlaying from "@/components/NowPlaying";

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
      <body className="bg-amber-50/30 text-gray-700 serif-regular text-center min-h-screen items-center flex flex-col px-4 sm:px-10">
        <ViewerTracker />
        {/* mini nav */}
        <nav className="mt-8 sm:mt-18 flex justify-center items-center gap-6">
          <Link
            href="/"
            title="back home"
            className="text-sm sm:text-base hover:opacity-67"
          >
            ↻
          </Link>
          <Link
            href="/projects"
            title="fun trinkets i make in my free time"
            className=" text-sm sm:text-base hover:opacity-67"
          >
            projects
          </Link>
          <Link
            href="/about"
            title="behind the scenes"
            className=" text-sm sm:text-base hover:opacity-67"
          >
            about
          </Link>
          <Link
            href="/collections"
            title="where creativity reigns"
            className="text-sm sm:text-base hover:opacity-67"
          >
            collections
          </Link>
        </nav>

        {children}
        <footer className="mt-auto py-6 text-xs text-gray-500 w-full -mx-10">
          <div className="flex flex-col gap-2">
            {/* BIBLE VERSE */}
            {/* what to do with this? i want to perhaps have it link somewhere, maybe this could also rotate through my favourite verses
            could link to my own writing on the verse as well or sth creative like that */}
            <p className="pen-regular text-center">1 Thessalonians 5:16-18</p>

            <div className="relative flex items-center justify-center w-full">
              {/* edit the space between each icon here, using gap */}
              <div className="flex gap-2 sm:gap-4 items-center">
                <a
                  href="mailto:f26wu@uwaterloo.ca"
                  className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5  hover:translate-y-[-2px]"
                >
                  <img src="/icons/email.png" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fayranw/"
                  target="_blank"
                  className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5  hover:translate-y-[-2px]"
                >
                  <img src="/icons/linkedin.png" />
                </a>

                {/* CS WEBRING */}
                <div title="uw cs webring">
                  <Webring />
                </div>
                <a
                  href="https://github.com/wrufay"
                  target="_blank"
                  className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5 hover:translate-y-[-2px]"
                >
                  <img src="/icons/github.png" />
                </a>

                <a
                  href="https://x.com/wrufay"
                  target="_blank"
                  className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5  hover:translate-y-[-2px]"
                >
                  <img src="/icons/x.png" />
                </a>
              </div>

              <div className="absolute left-0">
                <NowPlaying />
              </div>

              <div className="absolute right-0">
                <LikeCounter />
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
