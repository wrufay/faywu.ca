export default function ArtCard({ description, image }) {
  return (
    <div className="flex flex-col cursor-pointer hover:translate-y-[-2px] transition-transform shadow-sm hover:shadow-md serif-regular bg-white/80 w-full rounded-lg opacity-0 fade-in break-inside-avoid mb-8 border border-gray-100">
      <img src={image} className="w-full object-cover rounded-t-lg" />
      <div className="p-3 flex gap-2 flex-col">
        <p className="text-xs text-left text-gray-600">{description}</p>
      </div>
    </div>
  );
}
