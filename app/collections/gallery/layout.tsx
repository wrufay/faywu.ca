import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Favourite art pieces Fay Wu has made throughout the years.",
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children;
}
