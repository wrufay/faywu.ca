export default function About() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl text-center">
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-10">
            coming soon...
          </h1> */}
          <p className="text-l md:text-2xl text-[#da6319] mb-8">coming soon!</p>

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
          <a href="https://github.com/wrufay" className="btn">
            my github
          </a>
        </div>
      </section>
    </main>
  );
}
