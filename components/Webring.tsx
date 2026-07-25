export default function Webring() {
  return (
    <div className="coding-regular flex items-center gap-0.5">
      <a href="https://cs.uwatering.com/#https://faywu.ca?nav=prev">
        <img
          src="/icons/leftarrow.png"
          alt="prev"
          className="w-2.5 h-2.5 opacity-41 dark:invert"
        />
      </a>
      <a href="https://cs.uwatering.com/#https://faywu.ca/" target="_blank">
        <img
          src="https://cs.uwatering.com/icon.black.svg"
          alt="CS Webring"
          className="w-[18px] h-auto opacity-41 dark:invert"
        />
      </a>
      <a href="https://cs.uwatering.com/#https://faywu.ca?nav=next">
        <img
          src="/icons/rightarrow.png"
          alt="next"
          className="w-2.5 h-2.5 opacity-41 dark:invert"
        />
      </a>
    </div>
  );
}
