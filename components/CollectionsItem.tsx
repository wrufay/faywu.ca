import Link from "next/link";

interface CollectionsItemProps {
  name: string;
}

export default function CollectionsItem(props: CollectionsItemProps) {
  return (
    <>
      <div className="flex flex-col hover:translate-y-[-4px] w-xs transition-transform shadow-sm hover:shadow-md serif-regular bg-white w-full max-w-xs md:w-xs rounded-lg opacity-0 fade-in border border-gray-100">
        <img
          src="{image}"
          className="h-32 w-full object-cover opacity-86 rounded-t-lg"
        />

        {/* clickable part below the image */}
        <Link
          href={`/collections/${props.name}`}
          className="p-4 flex gap-2 flex-col"
        >
          {/* emoji and title */}
          <div className="flex flex-row justify-between items-center">
            <span className="flex items-center gap-2">
              <img src="{logoLink}" className="w-5 h-5" />
              <h3 className="text-lg text-gray-800">{props.name}</h3>
            </span>
            <p className="text-xs coding-regular text-gray-300">hdas</p>
          </div>

          {/* description of project */}
          <p className="text-sm text-left text-gray-600">hi</p>
        </Link>
      </div>
    </>
  );
}
