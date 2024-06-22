import React from "react";
import clg from "../../images/clg.jpg";
import teesta from "../../images/images.jpg";
import teesta1 from "../../images/photo3jpg.jpg";

export default function StartJourney() {
  return (
    <div
      style={{
        padding: "30px 0px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          color: "#111",
          padding: "20px 0px",
        }}
      >
        At the threshold of its existence
      </div>

      <div style={{ position: "relative" }}>
        <img src={clg} alt="m" width="100%" height="auto" />
        <div
          style={{
            position: "absolute",
            top: "44%",
            left: "8%",
            fontSize: "20px",
            fontWeight: "600",
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "6px",
          }}
        >
          At the inception
        </div>
      </div>

      <div>
        "This is my college. I arrived here in 2016, and since then, I have
        developed a deep love for mountains."
      </div>

      <div>{""}</div>

      <div style={{ fontStyle: "italic" }}>
        "Behold, a glimpse into my daring escapades."
      </div>
      <div>
        <div style={{ fontSize: "32px" }}>
          My Favourite <br />
          Shots.
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <div style={{ paddingTop: "10vh" }}>
          <img src={teesta} alt="m" width="100%" height="auto" />
        </div>
        <div>
          <img src={teesta1} alt="m" width="100%" height="auto" />
        </div>
      </div>
    </div>
  );
}
