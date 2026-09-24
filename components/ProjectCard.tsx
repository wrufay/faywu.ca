import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  logo: string;
  date: string;
  delay?: number;
}

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  tags,
  logo,
  date,
  delay = 0,
}: ProjectCardProps) {
  return (
    <Link
      href={`/${slug}`}
      scroll={false}
      className="flex flex-col hover:translate-y-[-4px] transition-transform shadow-sm hover:shadow-md serif-regular bg-white dark:bg-stone-800 w-full max-w-xs md:w-xs rounded-lg opacity-0 fade-in border border-gray-100 dark:border-stone-900 cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={image}
        className="h-32 w-full object-cover opacity-86 rounded-t-lg dark:brightness-75"
      />

      <div className="p-4 flex gap-2 flex-col">
        {/* emoji and title */}
        <div className="flex flex-row justify-between items-center">
          <span className="flex items-center gap-2">
            <img src={logo} className="w-5 h-5 dark:brightness-75" />
            <h3 className="text-lg text-gray-800 dark:text-gray-300">{title}</h3>
          </span>
          <p className="text-xs coding-regular text-gray-400 dark:text-gray-500">{date}</p>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          {/* tags */}
          {/* lowkey should make tag into a component */}
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="rounded-full border border-gray-200 dark:border-stone-600 px-2 py-0.5 sm:py-1 sm:px-2.5 text-xs text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-stone-700"
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* description of project */}
        <p className="text-sm text-left text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  );
}
