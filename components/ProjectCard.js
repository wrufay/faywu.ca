import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  image,
  link,
  delay = 0,
}) {
  return (
    <Link
      href={link}
      className="flex flex-col hover:translate-y-[-4px] transition-transform shadow-sm hover:shadow-md serif-regular bg-white w-full max-w-xs rounded-lg opacity-0 animate-fadeIn border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={image}
        className="h-32 w-full object-cover  opacity-86 rounded-t-lg"
      />
      <div className="p-4 flex gap-2 flex-col">
        <span className="flex items-center gap-2 cursor-pointer">
          <img src="favicon.ico" className="w-5 h-5" />
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        </span>
        <p className="text-sm text-left text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
