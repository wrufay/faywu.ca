import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "fay wu's portfolio",
  description: "fay wu's personal portfolio site inspired by notion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-amber-50/30 text-gray-700 serif-regular text-center min-h-screen items-center flex flex-col px-8">
        {/* mini nav */}
        <nav className="mt-8 sm:mt-18 flex justify-center items-center gap-6">
          <Link href="/" className="hover:opacity-67">
            ↻
          </Link>
          <Link href="/collections" className=" hover:opacity-67">
            projects
          </Link>
          <Link href="/about" className=" hover:opacity-67">
            about
          </Link>
        </nav>
        {children}
        <footer className="mt-auto py-6 text-xs text-gray-500">
          <div className="flex flex-col gap-2 items-center">
            <p className="pen-regular">made with ♡ by fay</p>
            <div className="flex gap-4 items-center">
              <a
                href="mailto:f26wu@uwaterloo.ca"
                className="opacity-50 hover:opacity-67 w-5 h-5 hover:translate-y-[-2px]"
              >
                <img src="email.png" />
              </a>
              <a
                href="https://github.com/wrufay"
                target="_blank"
                className="opacity-50 hover:opacity-67 w-5 h-5 hover:translate-y-[-2px]"
              >
                <img src="github.png" />
              </a>
              <a
                href="https://www.linkedin.com/in/fayranw/"
                target="_blank"
                className="opacity-50 hover:opacity-67 w-5 h-5 hover:translate-y-[-2px]"
              >
                <img src="linkedin.png" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
