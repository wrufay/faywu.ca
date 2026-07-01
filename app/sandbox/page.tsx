export default function Sandbox() {
  return (
    <main className="flex flex-grow items-center justify-center w-full">
      <iframe
        className="h-[120px] w-[250px] shadow-md"
        src="https://bandcamp.com/EmbeddedPlayer/album=1894914042/size=large/bgcol=ffffff/linkcol=333333/artwork=none/track=134381612/transparent=true/"
        seamless
      />
    </main>
  );
}
