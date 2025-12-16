export default function Home() {
  return (
    <main className="min-h-screen">
      {/*main title text section*/}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        {/* <img
          src="/mylogo.png"
          className="w-64 h-64 object-cover rounded-full mx-auto mb-0"
          alt=""
        /> */}
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-10 typing-animation">
            hi there, i'm fay!
          </h1>
          <p className="text-l sm:text-2xl text-[#da6319] mb-8 fade-in delay-1 font-bold">
            studying cs @ uwaterloo (1a)
          </p>
          {/*buttons*/}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-bounce-delayed">
            <a href="https://www.linkedin.com/in/fayranw/" className="btn">
              let's connect!
            </a>
            <a href="https://github.com/wrufay" className="btn">
              view my github
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
