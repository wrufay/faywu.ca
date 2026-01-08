import Link from "next/link";

interface CollectionsItemProps {
  name: string;
  description: string;
  img: string;
  keyword: string;
  delay: number;
  link: string;
}

export default function CollectionsItem(props: CollectionsItemProps) {
  return (
    <>
      {/* card itself */}
      <div
        className="flex flex-col hover:translate-y-[-4px] w-full max-w-xs transition-transform shadow-sm hover:shadow-md serif-regular bg-white w-full max-w-xs md:w-xs rounded-lg opacity-0 fade-in-bounce border border-gray-100"
        style={{ animationDelay: `${props.delay}ms` }}
      >
        <img
          src={props.img}
          className="h-32 w-full object-cover opacity-67 rounded-t-lg"
        />

        {/* clickable part below the image */}
        <Link href={props.link} className="p-4 flex gap-2 flex-col">
          {/* emoji and title */}
          <div className="flex flex-row justify-between items-center">
            <span className="flex items-center gap-2">
              <img src="icons/flower.png" className="w-5 h-5 " />
              <h3 className="text-lg text-gray-800">{props.name}</h3>
            </span>

            <p className="text-xs coding-regular text-gray-300">
              {props.keyword}
            </p>
          </div>

          {/* description of project */}
          <p className="text-sm text-left text-gray-600">{props.description}</p>
        </Link>
      </div>
    </>
  );
}
