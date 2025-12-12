export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf2e3] text-black">
      {/*main title text section*/}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        {/* <img
          src="/mylogo.png"
          className="w-64 h-64 object-cover rounded-full mx-auto mb-0"
          alt=""
        /> */}
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 typing-animation">
            hi there, i'm fay!
          </h1>
          <p className="text-l md:text-2xl text-[#da6319] mb-6 fade-in delay-1">
            studying cs @ uwaterloo (1a)
          </p>
          {/*buttons*/}
          <div className="flex gap-4 justify-center fade-in-bounce-delayed">
            <a
              href="https://www.linkedin.com/in/fayranw/"
              className="px-3 py-1  text-black border border-black rounded-lg hover:bg-white transition"
            >
              connect with me!
            </a>
            <a
              href="https://github.com/wrufay"
              className="px-3 py-1 border border-black text-black rounded-lg hover:bg-[#da6319] hover:bg-white transition"
            >
              view my github
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
