export default function Home() {
  return (
    <main className="min-h-screen">
      {/*main title text section*/}
      <section className="flex flex-col items-center min-h-screen px-4 justify-center">
        <img
          src="/me-best.png"
          className="w-48 h-48 sm:w-64 sm:h-64 object-cover mx-auto mb-2 sm:mb-4 fade-in"
          alt=""
        />
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-8 sm:mb-10 typing-animation">
            hi there, i'm fay!
          </h1>
          <p className="text-l sm:text-2xl text-[var(--red-middle)] mb-4 sm:mb-8 fade-in delay-1 font-bold">
            an aspiring software developer who loves design.
          </p>
          {/*buttons*/}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center fade-in-bounce-delayed text-sm sm:text-base">
            <a
              href="https://www.linkedin.com/in/fayranw/"
              target="_blank"
              className="btn"
            >
              let's connect!
            </a>
            <a href="https://github.com/wrufay" target="_blank" className="btn">
              view my github
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
