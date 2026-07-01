"use client";

import { useState } from "react";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";

export default function Test() {
  const paintings = [
    {
      title: "street near home in the rain",
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
    {
      title: "combining photo refs",
      url: "/paintings/alone.png",
      year: "2023",
      medium: "charcoal on paper",
    },
    {
      title: "summer backyard from life",
      url: "/paintings/backyard.png",
      year: "2022",
      medium: "oil pastel on paper",
    },
    {
      title: "bird",
      url: "/paintings/bird.jpg",
      year: "2022",
      medium: "oil pastel on canson mixed media",
    },
    {
      title: "b&w, practicing contrast",
      url: "/paintings/bnw.jpg",
      year: "2023",
      medium: "acrylic on paper",
    },
    {
      title: "cherise",
      url: "/paintings/cherise.jpg",
      year: "2021",
      medium: "oil pastel on paper",
    },
    {
      title: "doggos, art 10 colour wheel project",
      url: "/paintings/doggos.jpg",
      year: "2023",
      medium: "watercolour on bristol board",
    },
    {
      title: "it's ok to feel.",
      url: "/paintings/feel.jpg",
      year: "2023",
      medium: "watercolour on paper",
    },
    {
      title: "fish; first ever attempt at acrylic",
      url: "/paintings/fish.png",
      year: "2021",
      medium: "acrylic on strathmore mixed media",
    },
    {
      title: "doodle for my friend's bday card",
      url: "/paintings/gift.png",
      year: "2023",
      medium: "watercolour on paper",
    },
    {
      title: "from life setup.",
      url: "/paintings/guitar.jpg",
      year: "2023",
      medium: "charcoal on paper",
    },
    {
      title: "some hands, art 10 daily sketches",
      url: "/paintings/hands-sketch.jpg",
      year: "2023",
      medium: "graphite on strathmore sketch",
    },
    {
      title: "PEI, for friend's bday",
      url: "/paintings/pei.png",
      year: "2023",
      medium: "acrylic on strathmore m.m.",
    },
    {
      title: "bus terminal at sundown",
      url: "/paintings/portland.png",
      year: "2022",
      medium: "oil pastel on canvas paper",
    },
    {
      title: "some pottery before firing",
      url: "/paintings/potterybroken.jpg",
      year: "2023",
      medium: "pottery",
    },
    {
      title: "relax.",
      url: "/paintings/relax.jpg",
      year: "2023",
      medium: "pottery",
    },
    {
      title: "road",
      url: "/paintings/road.png",
      year: "2022",
      medium: "oil pastel on mixed media sketchbook",
    },
    {
      title: "self portrait, art 10 unit project",
      url: "/paintings/self.jpg",
      year: "2023",
      medium: "graphite on mixed media paper",
    },
    {
      title: "daily sketches, random",
      url: "/paintings/sketchesalc.jpg",
      year: "2023",
      medium: "graphite",
    },
    {
      title: "daily sketches, people",
      url: "/paintings/sketchesbust.jpg",
      year: "2023",
      medium: "graphite",
    },
    {
      title: "daily sketches, dino",
      url: "/paintings/sketchesdino.jpg",
      year: "2023",
      medium: "graphite",
    },
    {
      title: "skull drawing realistic",
      url: "/paintings/skull.jpg",
      year: "2023",
      medium: "graphite",
    },
    {
      title: "somewhere mystic",
      url: "/paintings/somewhere.jpg",
      year: "2023",
      medium: "acrylic on canvas paper",
    },
    {
      title: "sketching my left hand again",
      url: "/paintings/teal-hand.jpg",
      year: "2023",
      medium: "acrylic on strathmore m.m.",
    },
  ];
  const mediums = [
    "all",
    ...Array.from(new Set(paintings.map((p) => p.medium.split(" on ")[0]))),
  ];
  const years = [
    "all",
    ...Array.from(new Set(paintings.map((p) => p.year))).sort(),
  ];
  const [mediumFilter, setMediumFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const filtered = paintings.filter(
    (p) =>
      (mediumFilter === "all" || p.medium.startsWith(mediumFilter)) &&
      (yearFilter === "all" || p.year === yearFilter)
  );

  const [curPainting, setCurPainting] = useState(0);
  const maxIndex = filtered.length - 1;

  const nextPic = () =>
    setCurPainting((cur) => (cur >= maxIndex ? 0 : cur + 1));
  const prevPic = () =>
    setCurPainting((cur) => (cur <= 0 ? maxIndex : cur - 1));

  const selectMedium = (m: string) => {
    setMediumFilter(m);
    setCurPainting(0);
  };
  const selectYear = (y: string) => {
    setYearFilter(y);
    setCurPainting(0);
  };

  return (
    <main className="py-10 flex flex-grow flex-col gap-4 sm:gap-6 justify-center items-center">
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-xs sm:text-sm text-left flex-1">
          pieces throughout the years.{" "}
        </h1>
        <div className="max-w-sm flex justify-end items-center gap-2">
          <Dropdown
            options={mediums}
            value={mediumFilter}
            onChange={selectMedium}
            placeholder="medium"
            className="border-none !text-gray-400 !p-0"
          />
          <Dropdown
            options={years}
            value={yearFilter}
            onChange={selectYear}
            placeholder="year"
            className="border-none !text-gray-400 !p-0"
          />
        </div>
      </div>

      {/* painting card */}
      {filtered.length === 0 ? (
        <div className="w-full max-w-sm flex flex-col gap-2 sm:gap-4 bg-white shadow-sm px-8 py-6 sm:px-10 sm:py-8 border border-gray-100 rounded-lg">
          <div className="relative">
            <Image
              src="/paintings/non.jpeg"
              alt="no results"
              width={400}
              height={400}
              className="w-full border border-gray-200 opacity-67"
            />
            <p className="absolute inset-0 flex items-center justify-center text-xs serif-regular text-white drop-shadow">
              no paintings found. try a different filter
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-sm flex flex-col gap-2 sm:gap-4 bg-white shadow-sm px-8 py-6 sm:px-10 sm:py-8 border border-gray-100 rounded-lg fade-in">
          <p className="text-[9px] sm:text-xs text-[var(--aritzia-blue)]/67 flex flex-row justify-between coding-regular">
            <span className="text-left">{filtered[curPainting].title}</span>
            <span className="text-right">
              {curPainting + 1}/{maxIndex + 1}
            </span>{" "}
          </p>
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-4">
            <img
              src="/icons/leftarrow.png"
              className="opacity-41 hover:opacity-67 w-3 h-3 cursor-pointer select-none"
              onClick={prevPic}
            />
            <Image
              key={curPainting}
              className="w-full border border-gray-200 opacity-90 select-none"
              src={filtered[curPainting].url}
              alt={filtered[curPainting].title}
              width={400}
              height={400}
              priority
            />
            <img
              src="/icons/rightarrow.png"
              className="opacity-41 hover:opacity-67 w-3 h-3 cursor-pointer select-none"
              onClick={nextPic}
            />
          </div>
          <p className="text-[9px] sm:text-xs text-gray-500 flex flex-row justify-between coding-regular">
            <span className="text-left text-[var(--aritzia-blue)]/67">
              created in {filtered[curPainting].year}
            </span>{" "}
            <span className="text-right">{filtered[curPainting].medium}</span>
          </p>
        </div>
      )}

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
