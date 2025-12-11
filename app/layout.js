import "./globals.css";

export const metadata = {
  title: "welcome to fay's world",
  description: "fay wu's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
