"use client";

import { useState } from "react";
import Image from "next/image";

export default function Test() {
  const paintings = [
    {
      title: "cole harbour, nova scotia",
      url: "/paintings/colby.png",
      year: "2021",
      medium: "oil pastel on watercolour paper",
    },
    {
      title: "friend's doggos",
      url: "/paintings/dogs.jpg",
      year: "2022",
      medium: "acrylic on canvas",
    },
    {
      title: "a bus somewhere in japan",
      url: "/paintings/bus.png",
      year: "2022",
      medium: "acrylic on paper",
    },
    {
      title: "a house in a peaceful neighbourhood",
      url: "/paintings/house.png",
      year: "2022",
      medium: "acrylic on paper",
    },
    {
      title: "highway somewhere",
      url: "/paintings/cars.png",
      year: "2022",
      medium: "oil pastel on paper",
    },
    {
      title: "my cats",
      url: "/paintings/cats.png",
      year: "2022",
      medium: "oil pastel on paper",
    },

    {
      title: "halifax public gardens",
      url: "/paintings/garden.png",
      year: "2023",
      medium: "charcoal on paper",
    },
    {
      title: "sketch from life",
      url: "/paintings/hand.png",
      year: "2023",
      medium: "acrylic on mixed media sketchbook",
    },

    {
      title: "art 10 final project",
      url: "/paintings/abstract.png",
      year: "2023",
      medium: "mixed media on watercolour paper",
    },
    {
      title: "still life",
      url: "/paintings/stilllife.png",
      year: "2023",
      medium: "acrylic on paper",
    },
    {
      title: "wolfville, nova scotia",
      url: "/paintings/valley.png",
      year: "2023",
      medium: "acrylic on paper",
    },
    {
      title: "halifax, nova scotia",
      url: "/paintings/citadel.png",
      year: "2023",
      medium: "acrylic on paper",
    },

    {
      title: "painting for my grandma",
      url: "/paintings/grandma.png",
      year: "2024",
      medium: "acrylic on paper",
    },
    {
      title: "japan window view",
      url: "/paintings/japan.jpg",
      year: "2024",
      medium: "acrylic on muji sketchbook",
    },
  ];
  const [curPainting, setCurPainting] = useState(0);
  const maxIndex = paintings.length - 1;

  const nextPic = () => {
    setCurPainting((cur) => (cur >= maxIndex ? 0 : cur + 1));
  };
  const prevPic = () => {
    setCurPainting((cur) => (cur <= 0 ? maxIndex : cur - 1));
  };
  return (
    <main className="py-10 flex flex-grow flex-col gap-4 sm:gap-6 justify-center items-center">
      {/* painting card */}
      <div className="max-w-sm flex flex-col gap-2 sm:gap-4 bg-white shadow-sm px-8 py-6 sm:px-10 sm:py-8 border border-gray-100 rounded-sm fade-in">
        <p className="text-[9px] sm:text-xs text-gray-500 flex flex-row justify-between coding-regular">
          {/* index+1 and title  */}
          <span className="text-left">{paintings[curPainting].title}</span>
          <span className="text-right">
            {curPainting + 1}/{maxIndex + 1}
          </span>{" "}
        </p>
        <div className="flex flex-row justify-center items-center gap-3 sm:gap-4">
          {/* prev button */}
          <img
            src="/icons/leftarrow.png"
            className="opacity-41 hover:opacity-67 w-3 h-3 cursor-pointer select-none"
            onClick={prevPic}
          />

          <Image
            key={curPainting}
            className="w-full border border-gray-200 opacity-86 rounded-sm select-none "
            src={paintings[curPainting].url}
            alt={paintings[curPainting].title}
            width={400}
            height={400}
            priority
          />
          {/* next button */}
          <img
            src="/icons/rightarrow.png"
            className="opacity-41 hover:opacity-67 w-3 h-3 cursor-pointer select-none"
            onClick={nextPic}
          />
        </div>
        {/* item description */}

        <p className="text-[9px] sm:text-xs text-gray-500 flex flex-row justify-between coding-regular">
          {/* year and medium  */}
          <span className="text-left">{paintings[curPainting].year}</span>{" "}
          <span className="text-right">{paintings[curPainting].medium}</span>
        </p>
      </div>

      {/* Hidden preload images */}
      <div className="hidden">
        {paintings.map((painting, index) => (
          <Image
            key={painting.url}
            src={painting.url}
            alt={painting.title}
            width={400}
            height={400}
            priority={index < 3}
          />
        ))}
      </div>
    </main>
  );
}
