export default function Home() {
  return (
    <main className="flex flex-grow items-center justify-center">
      {/*main title text section*/}
      <section className="flex flex-col px-4">
        <img
          src="/me-best.png"
          className="w-48 h-48 sm:w-72 sm:h-72 object-cover mx-auto mb-2 sm:mb-4 fade-in"
          alt=""
        />
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-8 sm:mb-10 typing-animation">
            hi there, i'm fay!
          </h1>
          <p className="text-l sm:text-2xl text-[var(--red-middle)] mb-6 sm:mb-8 fade-in delay-1 font-bold">
            an aspiring software developer who loves design.
          </p>
          {/*buttons*/}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center fade-in-bounce-delayed text-sm sm:text-base">
            <a
              href="https://www.linkedin.com/in/fayranw/"
              target="_blank"
              className="px-3 py-2 sm:px-4 sm:py-2  hover:scale-105 bg-[var(--og-red)] hover:bg-[var(--red-middle)] text-white rounded-lg"
            >
              let's connect!
            </a>
            <a
              href="https://github.com/wrufay"
              target="_blank"
              className="px-3 py-2 sm:px-4 sm:py-2  bg-[var(--og-red)] hover:scale-105 hover:bg-[var(--red-middle)] text-white rounded-lg"
            >
              visit my github
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
