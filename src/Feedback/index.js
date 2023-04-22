import { Box } from "@mui/material";
import React from "react";
import "../layout/LayoutPage.scss";
import SwiperS from "../component/SwiperScreen";

export default function FeedbackPage({lightTurnOn}) {
  return (
    <section style={{ width: "80%", minHeight:'100vh', height:'100%' }}>
      <div style={{ paddingBottom: "2.8rem" }}>
        <div
          style={{
            fontSize: "6vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div>Testimony</div>
          <Box
            style={{
              marginLeft: "20px",
              marginTop: "26px",
              height: "2px",
              width: "30%",
              // backgroundColor: "#fff",
            }}
            className={!lightTurnOn ? "light-background" : "night-background"}
          ></Box>
        </div>
      </div>
      <div>
        <SwiperS/>
      </div>
    </section>
  );
}
