import { Breadcrumbs, Button, Card, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import "./dashboard.css";

const DashboardPage = function () {
  return (
    <div>
      <div
        style={{
          position: "relative",
          left: "0",
          top : "0",
          backgroundColor: "#ffffff",
          color: "white",
        }}
      >
        <Breadcrumbs
          style={{
            backgroundColor: "#25274D",
            color: "white",
            padding: "1.5rem 5rem",
          }}
        >
          <a
            href="/"
            className="elc-a-tag"
            style={{
              textDecoration: "none",
              color: "#ffffff",
              fontWeight: "bold",
              letterSpacing: "1.78px",
            }}
          >
            ELOCUTION
          </a>
          <a
            href="/home"
            style={{
              color: "#ffffff",
            }}
          >
            Home
          </a>
        </Breadcrumbs>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1.5rem",
            backgroundColor: "#FFFFFF",
            color: "#25274D",
            height: "90px",
          }}
        >
          <Button
            style={{
              background: "#F2F1F9",
              border: "2px solid #25274D",
              padding: "0.719rem 1rem",
              borderRadius: "10px 0px 0px 10px",
            }}
          >
            <AddCircleOutlineIcon />
          </Button>
          <input
            placeholder="Enter your incorrect sentence here.."
            style={{
              width: "20rem",
              background: "#F2F1F9",
              border: "2px solid #25274D",
              padding: "1rem 3rem",
              borderRadius: "0px 0px 0px 0px",
            }}
          />
          <Button
            type="submit"
            style={{
              background: "#F2F1F9",
              border: "2px solid #25274D",
              padding: ".719rem 1rem",
              borderRadius: "0px 10px 10px 0px",
            }}
          >
            <SendIcon />
          </Button>
        </Grid>
        <Grid           style={{
                        display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }} 
        >
        <Card style={{ color: 'white', backgroundColor:'#25274d',           width: '40%',
            height: '350px', padding: '20px'}}>
          <p>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dicta
          blanditiis beatae neque magni exercitationem cum perferendis alias
          aliquid veniam obcaecati, consequuntur voluptate sint hic placeat
          omnis a quod architecto.</p>
        </Card>
        </Grid>
      </div> 
      <div
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          backgroundColor: "#FFFFFF",
        }}
      >

        <Breadcrumbs
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#25274D",
            color: "#FFFFFF",
            padding: "10px 0px",
          }}
        >
          <a>Thanks for visiting</a>
        </Breadcrumbs>
      </div>
    </div>
  );
};
export default DashboardPage;
