import { Project } from "@/lib/projects";

export default function ProjectModalContent({ project }: { project: Project }) {
  const { title, image, demoVideo, insideDesc, projectLink, githubLink, linkedinLink } =
    project;

  return (
    <div className="flex flex-col gap-6">
      {demoVideo ? (
        <video
          className="w-full rounded-lg border border-gray-200 dark:border-stone-600 dark:brightness-75"
          controls
          autoPlay
          loop
          muted
        >
          <source src={demoVideo} type="video/mp4" />
        </video>
      ) : (
        <img
          src={image}
          className="w-full rounded-lg border border-gray-200 dark:border-stone-600 dark:brightness-75"
          alt={title}
        />
      )}

      {/* stuff below the video */}
      <div className="flex flex-col sm:flex-row items-start gap-8 justify-between">
        {insideDesc && (
          <p className="text-gray-700 dark:text-gray-400 serif-regular text-sm text-left">
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
              className="bg-gray-200 dark:bg-stone-700 border text-sm border-gray-300 dark:border-stone-600 py-2 px-4 text-gray-700 dark:text-gray-400 rounded-full hover:shadow-sm hover:translate-y-[-2px]"
            >
              try it live!
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 dark:bg-stone-700 border border-gray-300 dark:border-stone-600 p-2 text-gray-700 dark:text-gray-400 rounded-full hover:shadow-sm opacity-67 hover:translate-y-[-2px]"
            >
              <img className="w-5 h-5 dark:invert" src="/icons/github.png" />
            </a>
          )}
          {linkedinLink && (
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 dark:bg-stone-700 border border-gray-300 dark:border-stone-600 p-2 text-gray-700 dark:text-gray-400 rounded-full hover:shadow-sm opacity-67 hover:translate-y-[-2px]"
            >
              <img className="w-5 h-5 dark:invert" src="/icons/linkedin.png" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
