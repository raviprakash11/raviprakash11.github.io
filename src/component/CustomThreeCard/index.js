import React from "react";
import "./CustomThreeCard.scss";
import { Box, Card } from "@mui/material";

export default function CustomThreeCardPage() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', flexDirection:'row'}}>
      <Card className="main-card-app1">
        <div className="main-comp-app">
          <div className="main-card-heading">4+</div>
          <div className="main-card-subheading">Experience</div>
        </div>
        <Box className="color-design1"></Box>
      </Card>

      <Card className="main-card-app2">
        <div className="main-comp-app">
          <div className="main-card-heading">7+</div>
          <div className="main-card-subheading">Project</div>
        </div>
        <Box className="color-design2"></Box>
      </Card>

      <Card className="main-card-app3">
        <div className="main-comp-app">
          <div className="main-card-heading">4+</div>
          <div className="main-card-subheading">Client</div>
        </div>
        <Box className="color-design3"></Box>
      </Card>
    </div>
  );
}
