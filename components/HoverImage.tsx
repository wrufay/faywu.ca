"use client";
import { useRef } from "react";

interface HoverImageProps {
  src: string;
  alt: string;
  href: string;
  label: string;
  caption?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function HoverImage({ src, alt, href, label, caption, className, style }: HoverImageProps) {
  const tooltipRef = useRef<HTMLSpanElement>(null);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col cursor-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (tooltipRef.current) {
          tooltipRef.current.style.transform = `translate(${e.clientX - rect.left + 10}px, ${e.clientY - rect.top + 10}px)`;
          tooltipRef.current.style.opacity = "1";
        }
      }}
      onMouseLeave={() => {
        if (tooltipRef.current) tooltipRef.current.style.opacity = "0";
      }}
    >
      <img src={src} alt={alt} className={className} style={style} />
      {caption && (
        <p className="text-xs coding-regular text-gray-400 text-center mt-auto pt-1">
          {caption}
        </p>
      )}
      <span
        ref={tooltipRef}
        className="pointer-events-none absolute top-0 left-0 z-50 coding-regular text-[10px] bg-[var(--aritzia-blue)]/80 text-white px-2 py-1 rounded-md whitespace-nowrap opacity-0"
        style={{ transition: "opacity 0.15s ease" }}
      >
        {label}
      </span>
    </a>
  );
}
