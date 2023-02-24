import { Button, Grid } from "@mui/material";
import React from "react";
import "./frontdoor.css";

const FrontDoorPage = function () {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#25274d",
        color: "white",
        minHeight: "100vh",
        minWidth: "100%",
      }}
    >
      <div
        style={{
          marginTop: "5rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "57px", letterSpacing: "-6px" }}>ELOCUTION</p>
        </div>
        <p
          style={{
            marginTop: "0rem",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "17px",
            letterSpacing: "6px",
          }}
        >
          I'll assist you in sentence correction.
        </p>
        <hr width="38%"/>
      </div>
      <div
        style={{
          marginBottom: "15.5rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button href="/faq" className="btn btn-knw-more">
            Know More
          </Button>
          <Button href="/home" className="btn btn-get-st">
            Get Started
          </Button>
        </div>
      </div>
    </Grid>
  );
};
export default FrontDoorPage;
