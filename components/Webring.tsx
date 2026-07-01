export default function Webring() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2px",
      }}
      className="coding-regular"
    >
      <a href="https://cs.uwatering.com/#https://faywu.ca?nav=prev">
        <img src="/icons/leftarrow.png" alt="prev" style={{ width: "10px", height: "10px", opacity: 0.41 }} />
      </a>
      <a href="https://cs.uwatering.com/#https://faywu.ca/" target="_blank">
        <img
          src="https://cs.uwatering.com/icon.black.svg"
          alt="CS Webring"
          style={{ width: "18px", height: "auto", opacity: 0.41 }}
        />
      </a>
      <a href="https://cs.uwatering.com/#https://faywu.ca?nav=next">
        <img src="/icons/rightarrow.png" alt="next" style={{ width: "10px", height: "10px", opacity: 0.41 }} />
      </a>
    </div>
  );
}
