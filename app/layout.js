import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "fay's workspace ⋆˚꩜｡",
  description: "my personal portfolio site, inspired by Notion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* need to make a colour scheme :) */}
      {/* bg-linear-65 from-[#ffe3e0] to-[#ffcf99]  */}
      <body className="bg-amber-50/30 text-black serif-regular text-center min-h-screen items-center flex flex-col px-8">
        {/* mini nav */}
        <nav className="mt-8 sm:mt-18 flex justify-center gap-6">
          <Link href="/" className="hover:opacity-67">
            ↻
          </Link>
          {/* <Link href="/about" className=" hover:opacity-67 font-black">
            about me
          </Link> */}
          {/* <Link className="hover:underline">my work</Link> */}
          <Link href="/collections" className=" hover:opacity-67">
            collections
          </Link>
        </nav>
        {children}
        <footer className="mt-auto py-6 text-xs text-gray-500">
          <div className="flex flex-col gap-2 items-center">
            <p>made with ♡ by fay</p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/fayranw/"
                target="_blank"
                className="hover:text-gray-700 transition-colors"
              >
                linkedin
              </a>
              <a
                href="https://github.com/wrufay"
                target="_blank"
                className="hover:text-gray-700 transition-colors"
              >
                github
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
