"use client";
import Link from "next/link";
import { ComponentProps } from "react";

export default function NavLink(props: ComponentProps<typeof Link> & { sfx?: boolean }) {
  const { sfx = true, ...rest } = props;
  return (
    <Link
      {...rest}
      onClick={(e) => {
        if (sfx) new Audio("/sfx/click.mp3").play().catch(() => {});
        props.onClick?.(e);
      }}
    />
  );
}
