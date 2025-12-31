export default function Home() {
  return (
    <main className="flex flex-grow items-center justify-center">
      {/*main title text section*/}
      <section className="flex flex-col px-4">
        <div className="fade-in">
          <img
            src="/me-tp.png"
            className="w-40 h-40 bg-white sm:w-48 sm:h-48 object-cover mx-auto mb-6 sm:mb-8 opacity-86 rounded-full shadow-md"
            alt=""
          />
        </div>
        <div className="max-w-sm">
          <h1 className="text-3xl sm:text-4xl text-left md:text-5xl font-semibold text-gray-900 mb-8 sm:mb-10 typing-animation">
            hi there, i'm <span className="pen-regular">fay wu</span>
          </h1>
          <p className="text-md sm:text-xl text-gray-600 mb-6 sm:mb-8 fade-in delay-1">
            cs student @ uwaterloo + software developer who loves design
          </p>
          {/*buttons*/}
          <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center fade-in-bounce-delayed text-xs sm:text-sm">
            <a
              href="https://www.linkedin.com/in/fayranw/"
              target="_blank"
              className="px-3 py-2 sm:px-4 sm:py-2 bg-white hover:translate-y-[-2px] transition-transform border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100/50"
            >
              let's <span className="text-[var(--og-red)]">connect!</span>
            </a>
            <a
              href="https://github.com/wrufay"
              target="_blank"
              className="px-3 py-2 sm:px-4 bg-white sm:py-2 hover:translate-y-[-2px] transition-transform border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100/50"
            >
              see my <span className="text-[var(--og-red)]">work</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
