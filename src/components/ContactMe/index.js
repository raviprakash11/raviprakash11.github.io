export default function ContactMe() {
  return (
    <div
      style={{
        padding: "40px 0px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ fontSize: "32px" }}>
        Forever embracing the call of adventurous treks.
      </div>
      <div style={{ fontSize: "18px" }}>
        Kindly{" "}
        <a href="/" style={{ cursor: "pointer" }}>
          inform me
        </a>{" "}
        about the trekking destination. I'll then assess my availability and
        plan accordingly.
        <br />
        Thank you.
      </div>
    </div>
  );
}
