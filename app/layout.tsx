import "./globals.css";
import Link from "next/link";
import LikeCounter from "@/components/LikeCounter";
import { Metadata } from "next";
import { ReactNode } from "react";
import Webring from "@/components/Webring";
import ViewerTracker from "@/components/ViewerTracker";

export const metadata: Metadata = {
  title: "fay wu's portfolio",
  description: "fay wu's personal portfolio site inspired by notion",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-amber-50/30 text-gray-700 serif-regular text-center min-h-screen items-center flex flex-col px-10">
        <ViewerTracker />
        {/* mini nav */}
        <nav className="mt-8 sm:mt-18 flex justify-center items-center gap-6">
          <Link href="/" className="text-sm sm:text-base hover:opacity-67">
            ↻
          </Link>
          <Link
            href="/projects"
            className=" text-sm sm:text-base hover:opacity-67"
          >
            projects
          </Link>
          <Link
            href="/about"
            className=" text-sm sm:text-base hover:opacity-67"
          >
            about
          </Link>
          <Link
            href="/collections"
            className="text-sm sm:text-base hover:opacity-67"
          >
            collections
          </Link>
        </nav>
        <div className="fixed bottom-4 right-4 z-50">
          <LikeCounter />
        </div>
        {children}
        <footer className="mt-auto py-6 text-xs text-gray-500">
          <div className="flex flex-col gap-2 items-center">
            <p className="pen-regular">1 thessalonians 5:16-18</p>
            <div className="flex gap-4 items-center">
              <a
                href="mailto:f26wu@uwaterloo.ca"
                className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5  hover:translate-y-[-2px]"
              >
                <img src="/icons/email.png" />
              </a>
              <a
                href="https://github.com/wrufay"
                target="_blank"
                className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5 hover:translate-y-[-2px]"
              >
                <img src="/icons/github.png" />
              </a>

              <Webring />
              {/* i could make these into components too lol */}
              <a
                href="https://www.linkedin.com/in/fayranw/"
                target="_blank"
                className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5  hover:translate-y-[-2px]"
              >
                <img src="/icons/linkedin.png" />
              </a>
              <a
                href="https://x.com/wrufay"
                target="_blank"
                className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5  hover:translate-y-[-2px]"
              >
                <img src="/icons/x.png" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
