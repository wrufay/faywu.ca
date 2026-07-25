# faywu.ca — design reference

Personal portfolio (Next.js App Router + Tailwind v4). This file documents the
design system already in place so changes stay consistent with it instead of
introducing new patterns per-page.

## Colors

Defined as CSS custom properties in `app/globals.css`, used via Tailwind
arbitrary values — **always include the `--` prefix**: `bg-[var(--aritzia-blue)]`,
never `bg-[var(aritzia-blue)]` (a recurring bug that breaks the Turbopack build).

| token | hex | used for |
|---|---|---|
| `--aritzia-blue` | `#0466c8` | link hover/active states, one of three header-highlight colors |
| `--crimson-red` | `#ef5f33` | link hover/active states, header highlight |
| `--sunny-yellow` | `#f1c40f` | header highlight — **avoid as plain text color**, low contrast on white; fine as a `/21`-opacity background highlight behind text |

Page background is warm, not white: body is `bg-amber-50/30`. Card surfaces
(`bg-white shadow-sm`) sit on top of that, so a page that's "just white" reads
as a distinct surface, not the default ground.

## Fonts

All loaded via Google Fonts import in `globals.css`, applied as utility classes
(not Tailwind font-family tokens):

- `serif-regular` / `serif-bold` / `serif-extrabold` — Nanum Myeongjo. Body
  text default, italic bold used for page titles (h1).
- `pen-regular` — Nanum Pen Script (cursive). Used for `<h2>` section headers
  throughout — this is the site's signature "handwritten" heading voice,
  paired with `text-2xl sm:text-4xl underline` or a `bg-[var(--color)]/21`
  highlight span on one word/phrase.
- `coding-regular` / `coding-bold` — Nanum Gothic Coding (monospace). Used for
  technical terms inline (tool names, feature names, tag labels), nav links,
  small UI labels — never for headings or body prose.
- `sans-regular` / `sans-bold` / `sans-extrabold` — Nanum Gothic. Rarely used;
  present but not a primary voice in the current pages.

Body copy paragraphs use plain `tracking-tight` with no font-family override
(inherits `serif-regular` from `<body>`).

## Layout rhythm

- Case-study / long-form pages: `max-w-2xl mx-auto` — kept intentionally
  narrow. A wider/full-bleed layout was tried and explicitly rejected; stay
  skinny unless told otherwise.
- Section wrapper: `<section className="px-6 sm:px-8 flex flex-col gap-10 sm:gap-16 w-full">`
- Sub-block within a section: `<div className="flex flex-col gap-4">`
- Headings: `pen-regular text-2xl sm:text-4xl` (responsive — don't ship the
  4xl size unscaled on mobile)
- Body paragraphs: `tracking-tight text-sm sm:text-base`
- Card grids (short callouts, "the call"/"tradeoff" style): `grid grid-cols-1 sm:grid-cols-2 gap-4`,
  each card `border border-gray-200 rounded-lg p-4 flex flex-col gap-1`, title
  `coding-bold text-sm`, body `tracking-tight text-sm text-gray-600`.
- Emphasis in prose: sparing. One bold/italic per paragraph at most, on the
  single strongest phrase — not decorative underlining of every clause. Bold
  for decisive facts/actions, italic for reflective asides and quoted dialogue,
  `coding-regular` for tool/feature names.

## Media (images/video)

- No border, no border-radius on photographic/video content — `shadow-sm`
  only. (Border + rounded corners is reserved for text callout cards, not
  media.)
- Videos that autoplay: always `autoPlay loop muted playsInline`. If a video
  has `controls` and is meant to be heard (e.g. `ProjectCard.tsx` demo clips),
  still include `muted` — browsers block unmuted autoplay anyway, and it's
  been a live requirement to keep every video the user doesn't explicitly play
  silent by default.
- Prefer `.webp` for static images; convert PNGs before adding them, don't
  ship raw screenshots. Compress video with
  `ffmpeg -vcodec libx264 -crf 28 -preset slow` (add `-c:a aac -b:a 128k` if
  the clip actually needs audio, `-an` if muted/decorative) — this reliably
  cuts size 60-90% with no visible quality loss for UI screen recordings.
- Delete the original once a converted/compressed asset is confirmed swapped
  in and code references are updated — don't leave orphaned originals in
  `public/`.

## Components

- `NotionToggle` (`components/NotionToggle.tsx`) — collapsible section for
  **body text**, not titles. Pattern: page heading stays a plain always-visible
  `pen-regular` `<h2>`, followed by `<NotionToggle summary={...}>` whose
  `summary` prop *is* the always-visible one-sentence trigger (with a ▶ arrow
  that rotates on open, and a hover-opacity affordance) — no separate "read
  more" label. `children` holds the detailed paragraphs/media that most
  readers will skip. Never wrap the heading itself in the toggle trigger.
- `ImageCarousel` (`components/ImageCarousel.tsx`) — supports an optional
  `label` per item, rendered as a small dark pill top-left of the image.
- Case-study page shell: cover image (`h-56 sm:h-72 object-cover`, no radius)
  → single `bg-white shadow-sm rounded-b-lg` wrapper containing all sections
  → `<Link>` back to the parent listing, centered, `coding-regular text-sm text-gray-500`.

## Working conventions

- This is an iterative personal project; the user is not a trained product
  designer and prefers writing case-study copy in their own voice first,
  rough and honest, then polishing structure/wording only when explicitly
  asked. Don't smooth over "I built things without a formal process" framing
  — that honesty is a feature, not something to dress up.
- Don't run verification commands (`tsc`, `curl`, dev-server checks) after
  every small edit by default — the user has asked for this loop to stop.
  Still fine to run `tsc --noEmit` after larger structural changes (multi-file
  edits, big refactors) since it's cheap and catches real breakage.
- When told to remove/replace an asset, check actual code references first
  (`grep -rl` across `app`, `components`, `lib`) before deleting — several
  past cleanups found files that looked orphaned but were still wired up
  (e.g. Supabase, which looks unused from a casual read but backs a live
  like-counter and viewer-tracker).
