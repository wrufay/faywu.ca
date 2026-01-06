"use client";

import { useState } from "react";

export default function Test() {
  const paintings = [
    {
      title: "cole harbour, nova scotia",
      url: "/paintings/colby.png",
      year: "2021",
      medium: "oil pastel on watercolour paper",
      description: "rain somehow feels sweeter when you're home",
    },
    {
      title: "friend's doggos",
      url: "/paintings/dogs.jpg",
      year: "2022",
      medium: "acrylic on canvas",
      description: "maybe one day animals can live forever",
    },
    {
      title: "busses in japan",
      url: "/paintings/bus.png",
      year: "2022",
      medium: "acrylic on paper",
      description: "a bus to nowhere, and everywhere at the same time.",
    },
    {
      title: "a house in a peaceful neighbourhood",
      url: "/paintings/house.png",
      year: "2022",
      medium: "acrylic on paper",
      description:
        "we really are teeny tiny, just like this painting, aren't we?",
    },
    {
      title: "highway somewhere",
      url: "/paintings/cars.png",
      year: "2022",
      medium: "oil pastel on paper",
      description: "the sky isn't always bluer on the other side.",
    },
    {
      title: "sketch of my cats",
      url: "/paintings/cats.png",
      year: "2022",
      medium: "oil pastel on paper",
      description:
        "spent my nye doing a couple strokes here, a couple strokes there...",
    },

    {
      title: "halifax public gardens",
      url: "/paintings/garden.png",
      year: "2023",
      medium: "charcoal on paper",
      description: "sunny days won't last forever, you know.",
    },
    {
      title: "sketch from life",
      url: "/paintings/hand.png",
      year: "2023",
      medium: "acrylic on mixed media sketchbook",
      description:
        "hello left hand. you don't do much, but i love you as my reference, 4ever",
    },

    {
      title: "art 10 unit project",
      url: "/paintings/abstract.png",
      year: "2023",
      medium: "mixed media on watercolour paper",
      description: "the world is more vast than you can fathom.",
    },
    {
      title: "still life, art 10",
      url: "/paintings/stilllife.png",
      year: "2023",
      medium: "acrylic on paper",
      description: "it's about finding beauty in the mundane.",
    },
    {
      title: "wolfville, nova scotia",
      url: "/paintings/valley.png",
      year: "2023",
      medium: "acrylic on paper",
      description:
        "wind blows, water flows. love grows, and so do the things we'll never know.",
    },
    {
      title: "citadel hill, halifax",
      url: "/paintings/citadel.png",
      year: "2023",
      medium: "acrylic on paper",
      description: "the only citadel i know and love.",
    },

    {
      title: "for my grandma",
      url: "/paintings/grandma.png",
      year: "2024",
      medium: "acrylic on paper",
      description: "time's a thief; when will she be caught...",
    },
    {
      title: "view from a friend's window in japan",
      url: "/paintings/japan.jpg",
      year: "2024",
      medium: "acrylic on muji sketchbook",
      description:
        "maybe one day i'll look back and it'll be a thankful memory, not a regretful one.",
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
    <main className="py-10 flex flex-grow justify-center items-center">
      {/* painting card */}
      <div className="max-w-sm flex flex-col gap-4 bg-white shadow-sm px-10 py-8 border border-gray-100 rounded-sm fade-in">
        <p className="text-xs text-gray-500 flex flex-row justify-between coding-regular">
          {/* index+1 and title  */}
          <span className="text-left">{paintings[curPainting].title}</span>
          <span className="text-right">{curPainting + 1}</span>{" "}
        </p>
        <div className="flex flex-row justify-center items-center gap-4">
          {/* prev button */}
          <img
            src="/icons/leftarrow.png"
            className="opacity-41 hover:opacity-67 w-3 h-3 cursor-pointer select-none"
            onClick={prevPic}
          />

          <img
            key={curPainting}
            className="w-full border border-gray-200 opacity-86 rounded-sm select-none"
            src={paintings[curPainting].url}
          />
          {/* next button */}
          <img
            src="/icons/rightarrow.png"
            className="opacity-41 hover:opacity-67 w-3 h-3 cursor-pointer select-none"
            onClick={nextPic}
          />
        </div>
        {/* item description */}
        <div className="flex flex-col gap-6">
          <p className="text-xs text-gray-500 flex flex-row justify-between coding-regular">
            {/* year and medium  */}
            <span className="text-left">
              {paintings[curPainting].year}
            </span>{" "}
            <span className="text-right">{paintings[curPainting].medium}</span>
          </p>
          <p className="text-sm">{paintings[curPainting].description}</p>
        </div>
      </div>
    </main>
  );
}
