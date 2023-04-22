import React from "react";
import "./TextCard.css";

export default function TestCard({ skillsHeading, listOfSkills, pathPick }) {
  return (
    <div>
      <div class="maincontainer">
        <div class="back">
          <h2>{skillsHeading}</h2>
          <p>{listOfSkills}</p>
        </div>
        <div class="front">
          <div
            class="image"
            style={{
              height: "98.8%",
              border: "1px solid #fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#121212",
            }}
          >
            <img
              src={pathPick}
              alt="skills"
              height="155.8px"
              width="auto"
              style={{ padding: "10px" }}
            />
            <h2>{skillsHeading}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
