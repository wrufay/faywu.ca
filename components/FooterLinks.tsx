"use client";
import Webring from "@/components/Webring";

export default function FooterLinks() {
  return (
    <div className="flex gap-1 sm:gap-2 items-center">
      <a
        href="https://www.linkedin.com/in/fayranw/"
        target="_blank"
        className="opacity-50 hover:opacity-67 w-4 h-4 sm:w-5 sm:h-5 hover:translate-y-[-2px]"
      >
        <img src="/icons/linkedin.png" />
      </a>
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
    </div>
  );
}
