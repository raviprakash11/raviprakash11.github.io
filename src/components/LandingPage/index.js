import React from "react";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";

export default function LandingPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "26px",
      }}
    >
      <div style={{ width: "80%" }}>
        <div style={{ fontSize: "44px" }}>Ravi</div>
        <div style={{ fontSize: "44px" }}>Prakash,</div>
        <div style={{ fontSize: "18px", fontStyle: "italic" }}>
          "an adventurer at heart, who relishes solo trips to the mountains."
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          src="https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
          alt="m"
          width="100%"
          height="auto"
        />
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
          The essence of me
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <a
            href="/"
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>for more</div>
            <div style={{ paddingTop: "8px" }}>
              <ChevronRightSharpIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
