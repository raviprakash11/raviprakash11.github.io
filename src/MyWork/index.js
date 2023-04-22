import { Box, Card } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import "./MyWork.scss";

export default function MyWorkPage({lightTurnOn}) {
  const handleGitNav1 = () => {
    window.open(
      "https://raviprakash11.github.io/wareong/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleGitNav2 = () => {
    window.open(
      "https://raviprakash11.github.io/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleGitNav3 = () => {
    window.open(
      "https://raviprakash11.github.io/GitWiz/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleGitNav4 = () => {
    // window.open(
    //   "https://www.twitter.com/raviprakashz/",
    //   "_blank",
    //   "noopener,noreferrer"
    // );
    console.log("click");
  };
  const handleGitNav5 = () => {
    window.open(
      "https://raviprakash11.github.io/CreditCardFraudDetectionSystem/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleGitNav6 = () => {
    window.open(
      "https://raviprakash11.github.io/MusicRecommendationSystem/about.html",
      "_blank",
      "noopener,noreferrer"
    );
  };
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
          <div>My Work</div>
          <Box
            style={{
              marginLeft: "20px",
              marginTop: "26px",
              height: "2px",
              width: "30%",
            }}
            className={!lightTurnOn ? "light-background" : "night-background"}
          ></Box>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <Card className="card-style">
          <div style={{ position: "relative" }}>
            <img
              src="https://raw.githubusercontent.com/raviprakash11/pics/master/imgs/pic1.png"
              alt="work-logo"
              height="160px"
              width="300px"
            />
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                right: "16px",
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={handleGitNav1}
            >
              <GitHubIcon />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <div className="project-name">Wareong</div>
            </div>
          </div>
        </Card>

        <Card className="card-style">
          <div style={{ position: "relative" }}>
            <img
              src="https://raw.githubusercontent.com/raviprakash11/pics/master/imgs/pic2.png"
              alt="work-logo"
              height="160px"
              width="300px"
            />
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                right: "16px",
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={handleGitNav2}
            >
              <GitHubIcon />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <div className="project-name">My Portfolio</div>
              {/* <hr/>
              <div style={{height:'160px',overflowY:'scroll'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus id dignissim justo. Lorem Nulla ut facilisis ligula.
              </div> */}
            </div>
          </div>
        </Card>

        <Card className="card-style">
          <div style={{ position: "relative" }}>
            <img
              src="https://raw.githubusercontent.com/raviprakash11/pics/master/imgs/pic3.png"
              alt="work-logo"
              height="160px"
              width="300px"
            />
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                right: "16px",
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={handleGitNav3}
            >
              <GitHubIcon />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <div className="project-name">GitWiz</div>
              {/* <hr/>
              <div style={{height:'160px',overflowY:'scroll'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus id dignissim justo. Lorem Nulla ut facilisis ligula.
              </div>*/}
            </div>
          </div>
        </Card>

        <Card className="card-style">
          <div style={{ position: "relative" }}>
            <img
              src="https://raw.githubusercontent.com/raviprakash11/pics/master/imgs/pic4.jpg"
              alt="work-logo"
              height="160px"
              width="300px"
            />
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                right: "16px",
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={handleGitNav4}
            >
              <GitHubIcon />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <div className="project-name">
                GPS-GSM based tracking of lost object
              </div>
              {/* <hr/>
              <div style={{height:'160px',overflowY:'scroll'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus id dignissim justo. Lorem Nulla ut facilisis ligula.
              </div> */}
            </div>
          </div>
        </Card>

        <Card className="card-style">
          <div style={{ position: "relative" }}>
            <img
              src="https://raw.githubusercontent.com/raviprakash11/pics/master/imgs/pic5.jpg"
              alt="work-logo"
              height="160px"
              width="300px"
            />
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                right: "16px",
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={handleGitNav5}
            >
              <GitHubIcon />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <div className="project-name">
                Credit Card Fraud Detection System
              </div>
              {/* <hr/>
              <div style={{height:'160px',overflowY:'scroll'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus id dignissim justo. Lorem Nulla ut facilisis ligula.
              </div> */}
            </div>
          </div>
        </Card>

        <Card className="card-style">
          <div style={{ position: "relative" }}>
            <img
              src="https://raw.githubusercontent.com/raviprakash11/pics/master/imgs/pic6.png"
              alt="work-logo"
              height="160px"
              width="300px"
            />
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                right: "16px",
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={handleGitNav6}
              // onClick={handleOpenMusicProject}
            >
              <GitHubIcon />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <div className="project-name">Music Recommendation System</div>
              {/* <hr/>
              <div >
                It will recommended based on your last choice
              </div> */}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
