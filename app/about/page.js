export default function About() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-10 typing-animation">
            bits about me ☺︎
          </h1>

          <div className="flex flex-col align-center">
            <p className="text-l sm:text-xl font-bold text-[var(--red-dark)] mb-8 fade-in delay-1">
              i love creating products that solve problems and implementing
              user-centred ui/ux. the web is my canvas, my laptop is my brush.
              <br></br>
              when i'm not coding, i'm probably...
            </p>

            <div className="">
              <ul className="mb-8 fade-in-bounce-delayed text-center text-sm sm:text-l list-none font-bold">
                <li className="mb-2">
                  ✱ talking, reading, journaling and learning about JESUS
                </li>
                <li className="mb-2">
                  ✱ painting impressionistic landscapes or acrylic portraits
                </li>
                <li className="mb-2">
                  ✱ on a walk admiring the sunset or working out at the gym
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="fade-in-bounce-delayed">
            <a href="https://mydailybread.streamlit.app/" className="btn">
              my resume
            </a>
          </div> */}

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
        </div>
      </section>
    </main>
  );
}
