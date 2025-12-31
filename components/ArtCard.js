export default function ArtCard({ description, image }) {
  return (
    <div className="flex flex-col cursor-pointer hover:scale-105 shadow-md serif-regular bg-white/67  w-full rounded-md opacity-0 animate-fadeIn break-inside-avoid mb-8">
      <img src={image} className=" w-full object-cover " />
      <div className="p-3 flex gap-2 flex-col">
        <p className="text-xs text-left text-gray-700">{description}</p>
      </div>
    </div>
  );
}
