import {
  Box,
  Button,
  Fade,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LightModeIcon from "@mui/icons-material/LightMode";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./LayoutPage.scss";
import AboutMePage from "../AboutMe";
import MyWorkPage from "../MyWork";
import ExperiencesPage from "../Experiences";
import FeedbackPage from "../Feedback";
import ContactMePage from "../ContactMe";
import FooterMainPage from "../FooterMain";
import LoadingBar from "../component/LoadingBar/pages";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Backdrop from "@mui/material/Backdrop";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LayoutPage() {
  const [lightTurnOn, setLightTurnOn] = useState(true);
  const handleLightOn = (e) => {
    setLightTurnOn(!lightTurnOn);
  };
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const myWorkRef = useRef(null);
  const navigateAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const navigateMyWork = () => {
    myWorkRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const navigateExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const navigateContactMe = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // const navigate = useNavigate();
  // const navigateBlog = () => {
  //   navigate("/blog");
  // };
  const openGit = () => {
    window.open(
      "https://www.github.com/raviprakash11/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const openLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/raviprakash11/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const openTwitter = () => {
    window.open(
      "https://www.twitter.com/tmnbot19656/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const openYoutube = () => {
    window.open(
      "https://www.youtube.com/@raviprakash5018",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const openInsta = () => {
    window.open(
      "https://www.instagram.com/__raviprakash/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const openEmail = () => {
    window.open(
      `https://outlook.office.com/mail/0/deeplink/compose?subject=&body=&to="ravi.p.prakash@hotmail.com`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleNovaenergon = () => {
    window.open(
      "https://github.com/novaenergon",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleEmailSubmit = () => {
    console.log("Hello");
  };
  const [emailValue, setEmailValue] = React.useState("");
  const [isValidEmail, checkValidEmail] = useState(true);
  console.log(checkValidEmail);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setEmailValue("");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  console.log("email value", emailValue);
  const handleClearInputBase = () => {
    setEmailValue("");
  };

  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <LoadingBar />
  ) : (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className={lightTurnOn ? "night-light" : "day-light"}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ width: "50px", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                marginLeft: "18px",
                width: "4%",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                position: "fixed",
              }}
            >
              <div />
              <div>
                <div>
                  <IconButton onClick={openGit}>
                    <GitHubIcon
                      className={
                        lightTurnOn
                          ? "icon-clr-night icon-hover-effect"
                          : "icon-clr-day icon-hover-effect"
                      }
                    />
                  </IconButton>
                </div>
                <div>
                  <IconButton onClick={openLinkedin}>
                    <LinkedInIcon
                      className={
                        lightTurnOn
                          ? "icon-clr-night icon-hover-effect"
                          : "icon-clr-day icon-hover-effect"
                      }
                    />
                  </IconButton>
                </div>
                <div>
                  <IconButton onClick={openTwitter}>
                    <TwitterIcon
                      className={
                        lightTurnOn
                          ? "icon-clr-night icon-hover-effect"
                          : "icon-clr-day icon-hover-effect"
                      }
                    />
                  </IconButton>
                </div>
                <div>
                  <IconButton onClick={openYoutube}>
                    <YouTubeIcon
                      className={
                        lightTurnOn
                          ? "icon-clr-night icon-hover-effect"
                          : "icon-clr-day icon-hover-effect"
                      }
                    />
                  </IconButton>
                </div>
                <div>
                  <IconButton onClick={openInsta}>
                    <InstagramIcon
                      className={
                        lightTurnOn
                          ? "icon-clr-night icon-hover-effect"
                          : "icon-clr-day icon-hover-effect"
                      }
                    />
                  </IconButton>
                </div>
                <div
                  style={{
                    marginLeft: "18px",
                    marginTop: "2rem",
                    marginBottom: "-2.4rem",
                  }}
                >
                  <Box
                    style={{
                      width: ".2vw",
                      height: "10rem",
                    }}
                    className={lightTurnOn ? "day-light" : "night-light"}
                  ></Box>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Text in a modal
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
              {/* <div>
              <div>
                <Button onClick={navigatePortfolio}>Portfolio</Button>
              </div>
              <div>
                <Button onClick={navigateBlog}>Blog</Button>
              </div>
            </div> */}
            </Box>
          </Fade>
        </Modal>
        <section style={{ width: "86%", height: "100%", minHeight: "100vh" }}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "6vh",
                marginBottom: "4vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "2.6vw",
                  // fontSize: "1.0rem",
                  paddingLeft: "3.4vw",
                }}
              >
                <div
                  className={
                    lightTurnOn
                      ? "nav-text-sty icon-clr-night"
                      : "nav-text-sty icon-clr-day"
                  }
                >
                  <div>home</div>
                  <div>
                    <Box
                      style={{
                        marginLeft: "0px",
                        marginTop: "1.64vh",
                        height: "2px",
                        width: "100%",
                        backgroundColor: "#FA5927",
                      }}
                      className={lightTurnOn ? "day-light" : "night-light"}
                    ></Box>
                  </div>
                </div>
                <div
                  className={
                    lightTurnOn
                      ? "nav-text-sty icon-clr-night hover-underline-animation"
                      : "nav-text-sty icon-clr-day hover-underline-animation"
                  }
                  onClick={navigateAboutMe}
                >
                  about
                </div>
                <div
                  className={
                    lightTurnOn
                      ? "nav-text-sty icon-clr-night hover-underline-animation"
                      : "nav-text-sty icon-clr-day hover-underline-animation"
                  }
                  onClick={navigateExperience}
                >
                  experience
                </div>
                <div
                  className={
                    lightTurnOn
                      ? "nav-text-sty icon-clr-night hover-underline-animation"
                      : "nav-text-sty icon-clr-day hover-underline-animation"
                  }
                  onClick={navigateMyWork}
                >
                  work
                </div>
                {/* <div
                  className={
                    lightTurnOn
                      ? "nav-text-sty icon-clr-night hover-underline-animation"
                      : "nav-text-sty icon-clr-day hover-underline-animation"
                  }
                  onClick={navigateBlog}
                >
                  blog
                </div> */}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "2.6vw",
                  // fontSize: "1.0rem",
                }}
              >
                <div
                  className={
                    lightTurnOn
                      ? "nav-text-sty icon-clr-night hover-underline-animation"
                      : "nav-text-sty icon-clr-day hover-underline-animation"
                  }
                  onClick={navigateContactMe}
                >
                  contact
                </div>
                <div onClick={handleLightOn}>
                  {lightTurnOn === false ? (
                    <BedtimeIcon />
                  ) : (
                    <LightModeIcon className="sun-icon" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <Grid container>
            <Grid item xs={10}>
              <div style={{ paddingTop: "8vh", paddingLeft: "4vw" }}>
                <div
                  className={
                    lightTurnOn
                      ? "icon-clr-night sty-hi-name-text"
                      : "icon-clr-day sty-hi-name-text"
                  }
                >
                  ✌️ Hi, my name is,
                </div>
                <div
                  className={
                    lightTurnOn
                      ? "icon-clr-night sty-main-name"
                      : "icon-clr-day sty-main-name"
                  }
                >
                  Ravi Prakash.
                </div>
                <div
                  className={
                    lightTurnOn
                      ? "icon-clr-night sty-main-name1"
                      : "icon-clr-day sty-main-name1"
                  }
                >
                  I build things for the web.
                </div>
                <div
                  className={
                    lightTurnOn
                      ? "icon-clr-night sty-main-para"
                      : "icon-clr-day sty-main-para"
                  }
                >
                  I’m a software engineer specializing in building (and
                  occasionally designing) exceptional digital experiences.
                  Currently, I’m focused on building accessible, human-centered
                  products at{" "}
                  <span
                    onClick={handleNovaenergon}
                    className="novaenergon-text"
                  >
                    <u>Novaenergon</u>
                  </span>{" "}
                  . Have some project in mind? Please send me your email, I'll
                  connect you.
                </div>
              </div>

              <div style={{ paddingTop: "6vh", paddingLeft: "4vw" }}>
                {/* <form autoComplete="off" onSubmit={handleEmailSubmit}> */}
                <Paper
                  component="form"
                  sx={{
                    // p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                    borderRadius: 2,
                    boxShadow: "none",
                  }}
                  style={{ border: "1px solid black" }}
                  onSubmit={handleEmailSubmit}
                >
                  <div style={{ padding: "10px" }}>
                    <MailOutlineIcon />
                  </div>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter your email id"
                    value={emailValue ? emailValue : ""}
                    onChange={(event) => {
                      setEmailValue(event.target.value);
                    }}
                  />
                  {emailValue && (
                    <IconButton
                      style={{ padding: "10px" }}
                      onClick={handleClearInputBase}
                    >
                      <ClearOutlinedIcon sx={{ color: "grey" }} />
                    </IconButton>
                  )}
                  <Button
                    disabled={!emailValue}
                    className="send-btn"
                    onClick={handleOpen}
                  >
                    Send
                  </Button>
                </Paper>
                {/* </form> */}
                {!isValidEmail && (
                  <div className="error-text">
                    **Please enter correct email-id
                  </div>
                )}
              </div>

              {/* <div>
                dsa
              </div> */}
            </Grid>
            <Grid
              item
              xs={2}
              style={{ height: "80vh" }}
              className={lightTurnOn ? "light-background" : "night-background"}
            />
          </Grid>
        </section>
        <div
          style={{ width: "50px", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                // width: "6%",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                position: "fixed",
              }}
            >
              <div />
              <div>
                <div
                  style={{ writingMode: "vertical-rl" }}
                  onClick={openEmail}
                  className={
                    lightTurnOn
                      ? "icon-clr-night email-main"
                      : "icon-clr-day email-main"
                  }
                >
                  <u>raviswork@outlook.com</u>
                </div>
                <div
                  style={{
                    marginLeft: "6px",
                    marginTop: "2rem",
                    marginBottom: "-2.4rem",
                  }}
                >
                  <Box
                    style={{
                      width: ".2vw",
                      height: "10rem",
                    }}
                    className={lightTurnOn ? "day-light" : "night-light"}
                  ></Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingTop: "2rem",
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        ref={aboutMeRef}
      >
        <AboutMePage lightTurnOn={lightTurnOn} />
      </div>
      <div
        style={{
          paddingTop: "2rem",
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        ref={experienceRef}
      >
        <ExperiencesPage lightTurnOn={lightTurnOn} />
      </div>
      <div
        style={{
          paddingTop: "2rem",
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        ref={myWorkRef}
      >
        <MyWorkPage lightTurnOn={lightTurnOn} />
      </div>
      <div
        style={{
          paddingTop: "2rem",
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FeedbackPage lightTurnOn={lightTurnOn} />
      </div>
      <div
        style={{
          paddingTop: "2rem",
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          minHeight: "90vh",
        }}
        ref={contactRef}
      >
        <ContactMePage lightTurnOn={lightTurnOn} />
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <ArrowDropUpIcon sx={{ color: "#f2f2f2" }} />
        </button>
      )}
      <div
        style={{
          paddingTop: "2rem",
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          minHeight: "2vh",
        }}
      >
        <FooterMainPage />
      </div>
    </div>
  );
}
