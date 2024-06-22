import React from "react";
import MenuBar from "./components/MenuBar";
import LandingPage from "./components/LandingPage";
import StartJourney from "./components/StartJourneyPage";
import GoingJourney from "./components/GoingJourney";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import { Divider } from "@mui/material";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            position: "sticky",
            top: "0",
            backgroundColor: "#fff",
            zIndex: 1,
            width: "100%",
          }}
        >
          <MenuBar />
        </div>
        <div
          style={{
            padding: "0px 20px",
          }}
        >
          <LandingPage />
          <StartJourney />
          <GoingJourney />
          <ContactMe />
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <Divider />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
