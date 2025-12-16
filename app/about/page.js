export default function About() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-10 typing-animation">
            bits about me ☺︎
          </h1>
          <div className="">
            <p className="text-l sm:text-xl text-[#da6319] mb-8 fade-in delay-1">
              i'm somebody who loves...
            </p>

            <div className="">
              <ul className="mb-8 fade-in-bounce-delayed text-justify text-sm sm:text-l list-none">
                <li className="mb-2">
                  ✱{" "}
                  <a href="/collections" className="hover:underline">
                    Jesus
                  </a>
                  ! ♡{" "}
                  <a
                    href="https://www.bible.com/bible/114/1TH.5.16-18.NKJV"
                    className="text-gray-500 hover:underline"
                  >
                    1 thessalonians 5:16-18
                  </a>{" "}
                  (my favourite verse)
                </li>
                <li className="mb-2">
                  ✱ learning new tech and building meaningful{" "}
                  <a href="/collections" className="hover:underline">
                    projects
                  </a>
                </li>
                <li className="mb-2">
                  ✱{" "}
                  <a href="/collections" className="hover:underline">
                    painting{" "}
                  </a>
                  people and places, and just art in general
                </li>
              </ul>
            </div>
          </div>
          <div className="fade-in-bounce-delayed">
            <a href="https://mydailybread.streamlit.app/" className="btn">
              a recent wip...
            </a>
          </div>

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
