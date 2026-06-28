export default function Webring() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "3px",
      }}
      className="coding-regular"
    >
      <a href="https://cs.uwatering.com/#https://faywu.ca?nav=prev" className="pen-regular text-lg">&lt;</a>
      <a href="https://cs.uwatering.com/#https://faywu.ca/" target="_blank">
        <img
          src="https://cs.uwatering.com/icon.black.svg"
          alt="CS Webring"
          style={{ width: "18px", height: "auto", opacity: 0.41 }}
        />
      </a>
      <a href="https://cs.uwatering.com/#https://faywu.ca?nav=next" className="pen-regular text-lg">&gt;</a>
    </div>
  );
}
