export default function ProjectCard({ title, description, image, delay = 0 }) {
  return (
    <div
      className="flex flex-col cursor-pointer hover:scale-105 shadow-lg serif-regular bg-white w-full max-w-sm rounded-md opacity-0 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img src={image} className="h-32 w-full object-cover opacity-67" />
      <div className="p-4 flex gap-2 flex-col">
        <span className="flex items-center gap-2">
          <h3 className="text-2xl font-bold text-black">my</h3>
          <img src="chill.png" className="w-5 h-5" />
          <h3 className="text-2xl font-bold text-black">{title}</h3>
        </span>
        <p className="text-base text-left text-gray-700">{description}</p>
      </div>
    </div>
  );
}
