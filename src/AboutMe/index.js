import { Box } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import "../layout/LayoutPage.scss";
import CustomThreeCardPage from "../component/CustomThreeCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function AboutMePage({ lightTurnOn }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: "80%" }}>
      <section>
        <div style={{ paddingBottom: "2.8rem" }}>
          <div
            style={{
              fontSize: "6vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div>About Me</div>
            <Box
              style={{
                marginLeft: "20px",
                marginTop: "26px",
                height: "2px",
                width: "30%",
                // // backgroundColor: "#fff",
              }}
              className={lightTurnOn ? "day-light" : "night-light"}
            ></Box>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            style={{
              height: "500px",
              width: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={lightTurnOn ? "light-background" : "night-background"}
          >
            <img
              src="https://raw.githubusercontent.com/raviprakash11/pics/master/ProfilePlaceholder.jpeg"
              width="auto"
              height="212px"
              style={{ borderRadius: "2px" }}
              alt="ravi"
            />
            <Box
              style={{
                marginTop: "48px",
                borderRadius: "2px",
                marginLeft: "70px",
                position: "absolute",
                height: "220px",
                width: "210px",
                // border: "1px solid #fff",
              }}
              className={
                lightTurnOn ? "about-me-border-night" : "about-me-border-day"
              }
            ></Box>
          </Box>

          <div
            style={{
              width: "40%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  sx={{
                    "& .Mui-selected": {
                      color: "#FA5927 !important",
                    },
                  }}
                  TabIndicatorProps={{
                    style: { background: "#fa5927" },
                  }}
                >
                  <Tab
                    label="My Intro"
                    sx={{ fontSize: "18px" }}
                    {...a11yProps(0)}
                  />
                  <Tab label="My Education" {...a11yProps(1)} disabled />
                  <Tab label="My Journey" {...a11yProps(2)} disabled />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <div
                  className={
                    lightTurnOn ? "about-me-color-night" : "about-me-color-day"
                  }
                >
                  Greeting, My name is Ravi. I have been working as a full-time
                  software developer based in India since 2017.
                  <br /> My specialty is building scalable web and mobile
                  applications that work on any screen size without losing
                  functionality or user experience. <br /> I also have
                  experience testing mobile applications, web apps and services.{" "}
                  <br /> I prioritize providing value over services. <br /> As a
                  web developer, I enjoy designing applications that meet
                  end-user requirements and focus on functionality. <br /> In my
                  spare time, I work on a variety of projects to improve my
                  programming skillset, so you can trust me with responsive
                  websites or mobile apps that will work across a wide range of
                  devices - desktops or mobiles.
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                -
              </TabPanel>
              <TabPanel value={value} index={2}>
                -
              </TabPanel>
            </Box>
          </div>
        </div>
      </section>

      <section>
        <div>
          <CustomThreeCardPage />
        </div>
      </section>

      {/* <section >
          <div>
            <MyAchievementPage/>
          </div>
    </section> */}
    </div>
  );
}
