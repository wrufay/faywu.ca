import { Project } from "@/lib/projects";
import NotionToggle from "@/components/NotionToggle";

const body =
  "tracking-tight text-sm sm:text-base text-gray-700 dark:text-gray-400";

const stack = [
  "HTML + CSS",
  "JavaScript",
  "Three.js",
  "Spectral.js",
  "Vite",
  "Vercel",
  "Claude Code (Sonnet 5)",
];

// one toggle per technical aspect: `what` is the always-visible one-liner,
// `how` is what most readers will skip
const aspects = [
  {
    name: "Pigment mixing",
    what: "Blue + yellow makes green, not RGB mud",
    how: [
      "Colours convert to a 38-band reflectance spectrum, mix with Kubelka-Munk, then convert back to linear RGB.",
      "It's a typed-array, allocation-free port of Spectral.js, with the data tables generated from the package by a script. At about 0.2 µs per mix it's cheap enough to run for every bristle on every pixel it touches.",
      "Tinting strength and opacity are per-paint data, so Prussian blue overpowers a weak pigment.",
    ],
  },
  {
    name: "Drying",
    what: "A state machine driven by water content",
    how: [
      "With f = water / (solids + water): above 0.3 the paint is open (blends, gets picked up), between 0.3 and 0.12 it's tacky (drags, breaks up), and below 0.12 it locks into a dried film.",
      "Evaporation slows for thick paint and again once a skin forms, so glazes dry in seconds and impasto stays workable. A simulated clock with a time-warp control lets you skip the wait.",
      "Locked paint is inert, so new paint covers it instead of mixing. That's the whole difference between wet-on-wet and wet-on-dry.",
    ],
  },
  {
    name: "Bristles + ridges",
    what: "Every bristle is its own agent",
    how: [
      "Each bristle carries its own load and colour, lays paint along its own path, runs dry, skips over the canvas weave as it empties (dry brush), and picks up open paint it crosses. Flat, filbert, round and palette knife all share this machinery.",
      "Ridges: bristles shove open paint sideways. Displacements are queued and applied after every bristle has run (so order doesn't matter), spread bilinearly over four pixels, and carry their colour and volume.",
    ],
  },
  {
    name: "Thickness as light",
    what: "Paint height becomes a normal map",
    how: [
      "Each pixel stores paint height on top of a fixed canvas-weave height. The engine emits an unlit colour map and a tangent-space normal map, and the 3D easel and palette use both.",
      "That way the room's own lights shade the paint's thickness, and the ridges don't get lit twice.",
    ],
  },
  {
    name: "Performance",
    what: "Only touch what changed",
    how: [
      "The 1300 x 950 canvas is split into 32 px tiles. Only tiles holding wet paint get dried, only dirty tiles get re-shaded, and tiles changed by drying alone are shaded lazily on a per-frame budget. An sRGB lookup table replaced a pow() in the shader loop.",
      "The 3D room renders on demand: a frame is drawn only when the camera, easel, hover state or paint texture changes, and the shadow map only when something that casts a shadow moves. On touch devices the pixel ratio is capped, MSAA is reduced and the shadow map is halved.",
      "Idle and painting draw calls dropped to zero in desktop Chrome. I haven't measured it on the iPad yet.",
    ],
  },
  {
    name: "Undo",
    what: "Copy-on-write, by tile",
    how: [
      "A full-canvas snapshot is about 28 MB, so my first undo only went back one step. Now a step saves only the tiles a stroke touches, the first time it touches them.",
      "History is capped at 40 steps or 96 MB, and a test asserts that every undo restores the canvas exactly, including clear and dry-now.",
    ],
  },
  {
    name: "The 3D palette",
    what: "A second paint engine mapped onto a mesh",
    how: [
      "The palette mesh is built from a parametric outline (an ellipse with a dent and a thumb hole), extruded into a wooden board, and a second engine instance is UV-mapped onto it.",
      "A pointer ray is intersected with the mesh, the hit's UV is converted to engine pixels, and that drives the squeeze and mix tools. The hole and dent aren't in the mesh, so they can't be painted. Paint on the palette dries and is lit like everything else.",
    ],
  },
  {
    name: "Input",
    what: "Pressure on iPad, a guess on desktop",
    how: [
      "Pointer Events with coalesced samples, so fast strokes keep their shape. Apple Pencil and Wacom pressure drive the brush directly, and touch is ignored for a few seconds after a pen is detected (palm rejection).",
      "Mouse and trackpad have no pressure, so it's faked from stroke speed: move fast and the stroke gets lighter, like a hand skimming.",
    ],
  },
  {
    name: "Autosave",
    what: "Paint keeps drying while you're away",
    how: [
      "The engine exports its colour, wet layer and dried film (about 30 MB of floats), and a change counter says when a stroke, clear, dry-now or undo made a save worth doing. Every two seconds, and when the tab is hidden, it gzips the state with the browser's stream API and writes it to IndexedDB with a timestamp.",
      "On load, the paint is dried for however long the tab was closed, so a wet painting reopened the next day is dry.",
    ],
  },
];

export default function PaintAPintModal({ project }: { project: Project }) {
  const { demoVideo, insideDesc, projectLink, githubLink, linkedinLink } =
    project;

  return (
    <div className="flex flex-col gap-8">
      {demoVideo && (
        <video
          className="w-full rounded-lg border border-gray-200 dark:border-stone-600 dark:brightness-75"
          controls
          autoPlay
          loop
          muted
        >
          <source src={demoVideo} type="video/mp4" />
        </video>
      )}

      <div className="flex flex-col sm:flex-row items-start gap-8 justify-between">
      <p className="text-gray-700 dark:text-gray-400 serif-regular text-sm text-left">
        {insideDesc}
      </p>

      <div className="flex gap-3 flex-shrink-0 items-center">
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 dark:bg-stone-700 border text-sm border-gray-300 dark:border-stone-600 py-2 px-4 text-gray-700 dark:text-gray-400 rounded-full hover:shadow-sm hover:translate-y-[-2px]"
          >
            try it live!
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 dark:bg-stone-700 border border-gray-300 dark:border-stone-600 p-2 text-gray-700 dark:text-gray-400 rounded-full hover:shadow-sm opacity-67 hover:translate-y-[-2px]"
          >
            <img className="w-5 h-5 dark:invert" src="/icons/github.png" />
          </a>
        )}
        {linkedinLink && (
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 dark:bg-stone-700 border border-gray-300 dark:border-stone-600 p-2 text-gray-700 dark:text-gray-400 rounded-full hover:shadow-sm opacity-67 hover:translate-y-[-2px]"
          >
            <img className="w-5 h-5 dark:invert" src="/icons/linkedin.png" />
          </a>
        )}
      </div>
      </div>

      <section className="flex flex-col gap-14 sm:gap-20 w-full">
        <div className="flex flex-col gap-6">
          <p className={body}>
            Started at 12AM on a Friday in E7 with three ideas: social media,
            Nova Scotia, or art. By Saturday evening I had a one-prompt art tool
            a million times worse than any drawing app, so the rest was making
            it actually behave like paint. It runs entirely in the browser, with
            no backend.
          </p>
          <ul className="flex flex-wrap gap-2">
            {stack.map((t) => (
              <li
                key={t}
                className="text-sm border border-gray-200 dark:border-stone-600 rounded-full px-3 py-1 text-gray-600 dark:text-gray-400"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10">
          <h2 className="pen-regular text-2xl sm:text-4xl">How it works</h2>
          {aspects.map((a) => (
            <NotionToggle
              key={a.name}
              defaultOpen
              summary={
                <>
                  <span className="serif-bold">{a.name}</span> - {a.what}
                </>
              }
            >
              <div className="flex flex-col gap-5 pb-2">
                {a.how.map((p) => (
                  <p key={p} className={body}>
                    {p}
                  </p>
                ))}
              </div>
            </NotionToggle>
          ))}
        </div>

        <p className="tracking-tight text-xs sm:text-sm text-gray-500">
          Drying times, thickness, tinting strengths and opacities are tuned by
          eye against real paintings, not measured. Each pixel holds one visible
          colour, so thin paint over bare canvas can look chalky. Autosave is
          per-browser only. Pigment mixing follows Spectral.js (MIT, Ronald van
          Wijnen), and the paints are real Amsterdam and Winsor &amp; Newton
          Galeria colours.
        </p>
      </section>

    </div>
  );
}
