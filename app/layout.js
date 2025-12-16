import "./globals.css";

export const metadata = {
  title: "fay's world ⋆˚꩜｡",
  description: "personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fdf2e3] text-black">
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
