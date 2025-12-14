export default function About() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-10 typing-animation">
            coming soon..☺︎
          </h1>
          <p className="text-l sm:text-xl text-[#da6319] mb-8 fade-in delay-1">
            stalk me in the meantime ↓
          </p>

          {/* <ul className="mb-10">
            <li className="text-l md:text-2xl text-black">✱ Jesus ♡</li>
            <li className="text-l md:text-2xl text-black">
              ✱ painting landscapes
            </li>
            <li className="text-l md:text-2xl text-black">✱ buildinggg</li>
          </ul> */}
          {/* <a className="px-4 py-2 text-black border border-black rounded-lg hover:bg-white transition">
            resume
          </a> */}
          <div className="fade-in-bounce-delayed">
            <a href="https://mydailybread.streamlit.app/" className="btn">
              see recent project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
