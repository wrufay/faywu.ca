import Link from "next/link";
import { ReactNode } from "react";

interface CollectionsItemProps {
  name: string;
  description?: string;
  img: string;
  keyword: string;
  delay: number;
  link: string;
  children?: ReactNode;
}

export default function CollectionsItem(props: CollectionsItemProps) {
  return (
    <div
      className="flex flex-col hover:translate-y-[-4px] w-full max-w-xs transition-transform shadow-sm hover:shadow-md serif-regular bg-white dark:bg-stone-800 w-full max-w-xs md:w-xs rounded-lg opacity-0 fade-in border border-gray-100 dark:border-stone-900"
      style={{ animationDelay: `${props.delay}ms` }}
    >
      <img
        src={props.img}
        className="h-32 w-full object-cover opacity-67 rounded-t-lg dark:brightness-75"
      />

      {/* clickable title row */}
      <Link href={props.link} className="px-4 pt-4 flex gap-2 flex-col">
        <div className="flex flex-row justify-between items-center">
          <span className="flex items-center gap-2">
            <img src="/icons/flower.png" className="w-5 h-5 " />
            <h3 className="text-lg text-gray-800 dark:text-gray-300">{props.name}</h3>
          </span>

          <p className="text-xs coding-regular text-gray-300 dark:text-gray-600">
            {props.keyword}
          </p>
        </div>
      </Link>

      {/* description of project, or custom content (e.g. NowPlaying) in its place */}
      <div className="px-4 pb-4">
        {props.children ?? (
          <Link href={props.link}>
            <p className="text-sm text-left text-gray-600 dark:text-gray-400">{props.description}</p>
          </Link>
        )}
      </div>
    </div>
  );
}
