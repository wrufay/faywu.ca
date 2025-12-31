export default function Home() {
  return (
    <main className="flex flex-grow items-center justify-center">
      {/*main title text section*/}
      <section className="flex flex-col px-4">
        <img
          src="/me-tp.png"
          className="w-48 h-48 sm:w-72 sm:h-72 object-cover mx-auto mb-2 sm:mb-4 fade-in rounded-full border border-black/18"
          alt=""
        />
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-8 sm:mb-10 typing-animation">
            hey there, i'm fay!
          </h1>
          <p className="text-md sm:text-xl text-gray-500 mb-6 sm:mb-8 fade-in delay-1">
            1b cs student @ uwaterloo | aspiring software developer who loves
            design.
          </p>
          {/*buttons*/}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center fade-in-bounce-delayed text-sm sm:text-base">
            <a
              href="https://www.linkedin.com/in/fayranw/"
              target="_blank"
              className="px-3 py-2 sm:px-4 sm:py-2  hover:scale-105 border border-black text-black rounded-md"
            >
              let's connect!
            </a>
            <a
              href="https://github.com/wrufay"
              target="_blank"
              className="px-3 py-2 sm:px-4 sm:py-2  hover:scale-105 border border-black text-black rounded-md"
            >
              visit my github
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
