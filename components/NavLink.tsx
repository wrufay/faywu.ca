"use client";
import Link from "next/link";
import { ComponentProps } from "react";

export default function NavLink(props: ComponentProps<typeof Link>) {
  return <Link {...props} />;
}
