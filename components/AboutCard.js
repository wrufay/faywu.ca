export default function AboutCard({ delay = 0 }) {
  return (
    <section
      style={{ animationDelay: `${delay}ms` }}
      className="p-10 w-full max-w-2xl bg-white shadow-sm border border-gray-100 rounded-lg"
    >
      <h1 className="text-2xl sm:text-3xl">
        <span className="pen-regular text-3xl sm:text-4xl">fay</span> loves:
      </h1>
      <div>
        <ul className="flex flex-col gap-2">
          <li className="flex flex-row gap-1 sm:gap-2 items-center">
            <img src="star.png" className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            <span>Jesus</span>
          </li>
          <li className="flex flex-row gap-1 sm:gap-2 items-center">
            <img src="star.png" className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            <span>Waterloo</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
