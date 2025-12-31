import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "fay wu ⋆˚꩜｡",
  description: "fay wu's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* need to make a colour scheme :) */}
      {/* bg-linear-65 from-[#ffe3e0] to-[#ffcf99]  */}
      <body className=" bg-white text-black serif-regular text-center min-h-screen items-center flex flex-col px-18">
        {/* mini nav */}
        <nav className="mt-18 flex justify-center gap-6">
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
      </body>
    </html>
  );
}
