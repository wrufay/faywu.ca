import "./globals.css";

export const metadata = {
  title: "fay's world ⋆˚꩜｡",
  description: "personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
