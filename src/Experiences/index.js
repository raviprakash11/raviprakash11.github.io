import { Box } from "@mui/material";
import React from "react";
import "../layout/LayoutPage.scss";
import TestCard from "../component/CustomForm/TextCard";

export default function ExperiencesPage({lightTurnOn}) {
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
          <div>My Experiences</div>
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
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <TestCard
          skillsHeading={"UI/UX Development"}
          listOfSkills={"● React ● HTML ● SCSS/CSS ● JS  ● Kotlin  ● Angular"}
          pathPick={
            "https://raw.githubusercontent.com/raviprakash11/pics/master/icon/skill1.png"
          }
          colorCode='#000'
        />
        <TestCard
          skillsHeading={"Test Automation"}
          listOfSkills={"● Java ● Maven ● Selenium ● Perfecto ● Jenkins ● Eclipse"}
          pathPick={
            "https://raw.githubusercontent.com/raviprakash11/pics/master/icon/skill2.png"
          }
        />
        <TestCard
          skillsHeading={"API Testing"}
          listOfSkills={"● API Tweaking ● Postman ● Automated Test Script"}
          pathPick={
            "https://raw.githubusercontent.com/raviprakash11/pics/master/icon/skill3.png"
          }
        />
        <TestCard
          skillsHeading={"Functional Testing"}
          listOfSkills={"● QTest ● Chalres ● Jira ● Confluences ● Functional Test Execution"}
          pathPick={
            "https://raw.githubusercontent.com/raviprakash11/pics/master/icon/skill4.png"
          }
        />
        <TestCard
          skillsHeading={"System Adminstrator"}
          listOfSkills={"● RedHat Linux"}
          pathPick={
            "https://raw.githubusercontent.com/raviprakash11/pics/master/icon/skill5.png"
          }
        />
        <TestCard
          skillsHeading={"Cloud Technologies"}
          listOfSkills={"● AWS Certified ● Azure"}
          pathPick={
            "https://raw.githubusercontent.com/raviprakash11/pics/master/icon/skill6.png"
          }
        />
      </div>
    </section>
  );
}
