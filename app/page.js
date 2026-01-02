export default function Home() {
  return (
    <main className="flex flex-grow flex-col gap-8 sm:gap-10 items-center justify-center">
      {/*main title text section*/}

      <div className="fade-in">
        <img
          src="/flower.png"
          className="w-20 h-20 sm:w-30 sm:h-30 object-cover mx-auto opacity-86 "
          alt=""
        />
      </div>
      <div className="max-w-md flex flex-col gap-5 sm:gap-8">
        <h1 className="text-2xl sm:text-5xl font-semibold text-gray-900 typing-animation">
          hi there, i'm <span className="pen-regular">fay wu</span>
        </h1>

        <div className="text-sm sm:text-lg text-gray-600 flex flex-col items-center fade-in delay-1 gap-0.5 sm:gap-1">
          <p className="flex flex-row gap-1 sm:gap-2 items-center">
            <img src="star.png" className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            <span>cs @ uwaterloo</span>
          </p>
          <p className="flex flex-row gap-1 sm:gap-2 items-center">
            <img src="star.png" className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            <span>designer & software developer</span>
          </p>
        </div>
        {/*buttons*/}
        <div className="flex flex-row gap-2 sm:gap-3 justify-center items-center coding-regular fade-in-bounce-delayed text-xs sm:text-base">
          <a
            href="https://www.linkedin.com/in/fayranw/"
            target="_blank"
            className="px-3 py-2 sm:px-4 sm:py-2 bg-white hover:translate-y-[-2px] transition-transform border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100/50"
          >
            let's{" "}
            <span className="text-[var(--aritzia-blue)] coding-bold">
              connect!
            </span>
          </a>
          <a
            href="https://github.com/wrufay"
            target="_blank"
            className="px-3 py-2 sm:px-4 bg-white sm:py-2 hover:translate-y-[-2px] transition-transform border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100/50"
          >
            see my{" "}
            <span className="text-[var(--aritzia-blue)] coding-bold">work</span>
          </a>
        </div>
      </div>
    </main>
  );
}
