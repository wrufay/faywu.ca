import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gallery",
  description: "some of my favourite paintings & other art pieces, by me",
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children;
}
