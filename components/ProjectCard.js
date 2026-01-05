"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function ProjectCard({
  title,
  description,
  image,
  projectLink,
  githubLink,
  demoVideo,
  delay = 0,
  tags,
  logoLink,
  linkedinLink,
  insideDesc,
  date,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col hover:translate-y-[-4px] transition-transform shadow-sm hover:shadow-md serif-regular bg-white w-full max-w-xs md:w-xs rounded-lg opacity-0 fade-in border border-gray-100 cursor-pointer"
        style={{ animationDelay: `${delay}ms` }}
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={image}
          className="h-32 w-full object-cover opacity-86 rounded-t-lg"
        />

        {/* clickable part below the image */}
        <div className="p-4 flex gap-2 flex-col">
          {/* emoji and title */}
          <div className="flex flex-row justify-between items-center">
            <span className="flex items-center gap-2">
              <img src={logoLink} className="w-5 h-5" />
              <h3 className="text-lg text-gray-800">{title}</h3>
            </span>
            <p className="text-xs coding-regular text-[var(--aritzia-blue)]">
              {date}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            {/* tags */}
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="rounded-full border border-gray-200 px-2 py-0.5 sm:py-1 sm:px-2.5 text-xs text-gray-500 bg-gray-100"
                >
                  {tag}
                </span>
              );
            })}
          </div>

          {/* description of project */}
          <p className="text-sm text-left text-gray-600">{description}</p>
        </div>
      </div>

      {/* open modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col gap-6">
          {demoVideo ? (
            <video
              className="w-full rounded-lg border border-gray-200"
              controls
              autoPlay
              muted
              loop
            >
              <source src={demoVideo} type="video/mp4" />
            </video>
          ) : (
            <img
              src={image}
              className="w-full rounded-lg border border-gray-200"
              alt={title}
            />
          )}

          {/* stuff below the video */}
          <div className="flex flex-col sm:flex-row items-start gap-8 justify-between">
            {insideDesc && (
              <p className="text-gray-700 serif-regular text-sm text-left">
                {insideDesc}
              </p>
            )}
            {/* links */}
            <div className="flex gap-3 flex-shrink-0 items-center">
              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 border text-sm border-gray-300 py-2 px-4 text-gray-700 rounded-full hover:shadow-sm hover:translate-y-[-2px]"
                >
                  try it live!
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 border border-gray-300 p-2 text-gray-700 rounded-full hover:shadow-sm opacity-67 hover:translate-y-[-2px]"
                >
                  <img className="w-5 h-5" src="github.png" />
                </a>
              )}
              {linkedinLink && (
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 border border-gray-300 p-2 text-gray-700 rounded-full hover:shadow-sm opacity-67 hover:translate-y-[-2px]"
                >
                  <img className="w-5 h-5" src="linkedin.png" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
