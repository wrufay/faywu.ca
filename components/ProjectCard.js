export default function ProjectCard({ title, description, link, tags }) {
  return (
    <div className="flex flex-col bg-white p-6 w-full max-w-lg rounded-md">
      <h3 className="text-2xl font-bold text-black mb-3">{title}</h3>
      <p className="text-base text-gray-700 mb-4">{description}</p>
    </div>
  );
}
