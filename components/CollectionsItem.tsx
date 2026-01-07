import Link from "next/link";

interface CollectionsItemProps {
  name: string;
}

export default function CollectionsItem(props: CollectionsItemProps) {
  return (
    <>
      <Link href={`/collections/${props.name}`}>
        <p className="">{props.name}</p>
      </Link>
    </>
  );
}
