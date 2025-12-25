import "./globals.css";

export const metadata = {
  title: "fay's world ⋆˚꩜｡",
  description: "personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* need to make a colour scheme :) */}
      <body className=" bg-linear-65 from-[#ffe3e0] to-[#ffcf99] text-[var(--red-middle)] font-(family-name:--font-display) text-center">
        {/* mini nav */}
        <nav className="fixed top-10 left-0 right-0 p-4 flex justify-center gap-6">
          <a href="/" className="hover:underline">
            ↻
          </a>
          <a href="/about" className="hover:underline">
            about me
          </a>
          {/* <a className="hover:underline">my work</a> */}
          <a href="collections" className="hover:underline">
            collections
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
