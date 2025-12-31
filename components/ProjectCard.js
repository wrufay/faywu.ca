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
      className="flex flex-col cursor-pointer hover:scale-105 shadow-md serif-regular bg-white w-full max-w-xs rounded-md opacity-0 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img src={image} className="h-32 w-full object-cover opacity-67" />
      <div className="p-4 flex gap-2 flex-col">
        <span className="flex items-center gap-2">
          <img src="favicon.ico" className="w-5 h-5" />
          <h3 className="text-xl font-bold text-black">{title}</h3>
        </span>
        <p className="text-sm text-left text-gray-700">{description}</p>
      </div>
    </Link>
  );
}
