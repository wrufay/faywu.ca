import Link from "next/link";
import Swal from "sweetalert2";

export default function ProjectCard({
  title,
  description,
  image,
  projectLink,
  delay = 0,
  tags,
}) {
  // still working on the sweetaler :(
  // gonna try again later

  return (
    <div
      className="flex flex-col hover:translate-y-[-4px] transition-transform shadow-sm hover:shadow-md serif-regular bg-white w-full max-w-xs md:w-xs rounded-lg opacity-0 animate-fadeIn border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={image}
        className="h-32 w-full object-cover  opacity-86 rounded-t-lg"
      />

      {/* clickable part below the image */}
      <Link
        className="p-4 flex gap-2 flex-col cursor-pointer"
        href={projectLink}
        target="_blank"
      >
        {/* emoji and title */}
        <span className="flex items-center gap-2 ">
          <img src="favicon.ico" className="w-5 h-5" />
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        </span>

        <div className="flex flex-row gap-2">
          {/* tags */}
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="rounded-full border border-gray-200 px-2 py-0.5 sm:py-1 sm:px-2.5 sm:text-xs text-[8px] text-gray-500 bg-gray-100"
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* description of project */}
        <p className="text-sm text-left text-gray-600">{description}</p>
      </Link>
    </div>
  );
}
