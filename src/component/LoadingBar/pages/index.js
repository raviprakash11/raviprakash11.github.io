import React from "react";
import "../LoadingBar.scss";

export default function LoadingBar() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4vh",
        }}
      >
        <img
          className="bounce-in"
          src="https://raw.githubusercontent.com/raviprakash11/pics/master/rp-2.png"
          alt="logo"
          style={{ width: "auto", height: "80px", color:'white' }}
        />
      </div>
    </div>
  );
}
