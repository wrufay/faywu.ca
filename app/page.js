export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/*main title text section*/}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl text-center">
          {/* <img
            src="/mainpic.jpg"
            className="w-32 h-32 object-cover rounded-full mx-auto mb-8"
            alt=""
          /> */}
          <h1 className="text-5xl font-bold mb-6 typing-animation">
            hi there, i'm fay!
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6 fade-in delay-1">
            studying cs @ uwaterloo (1a)
          </p>
          {/*buttons*/}
          <div className="flex gap-4 justify-center fade-in-bounce-delayed">
            <a
              href="https://www.linkedin.com/in/fayranw/"
              className="px-4 py-2 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-200 transition"
            >
              connect with me!
            </a>
            <a
              href="https://github.com/wrufay"
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 hover:text-black transition"
            >
              view my github
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
