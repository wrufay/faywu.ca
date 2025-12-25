export default function About() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-10 typing-animation">
            coming soon! ☻
          </h1>

          <div className="flex flex-col align-center">
            <p className="text-l sm:text-xl font-bold text-[var(--red-dark)] mb-8 fade-in delay-1">
              in the meantime, i'm working on...
            </p>

            <div className="">
              <ul className="mb-8 fade-in-bounce-delayed text-center text-sm sm:text-l list-none font-bold">
                <li className="mb-2">
                  ✱{" "}
                  <a
                    href="https://github.com/wrufay/coco"
                    target="_blank"
                    className="hover:underline"
                  >
                    coco,
                  </a>{" "}
                  a chrome extension that helps you organize job applications
                </li>
                <li className="mb-2">✱ a bible app...</li>
                <li className="mb-2">
                  ✱ fieldly, a full-stack animation-based physics learning
                  platform
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="fade-in delay-1 flex mt-2">
            <a href="" className="btn m-2">
              projects
            </a>
            <a href="" className="btn m-2">
              artwork
            </a>
            <a href="" className="btn m-2">
              writing
            </a>
          </div> */}
        </div>
      </section>
    </main>
  );
}
