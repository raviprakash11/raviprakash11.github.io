import { Breadcrumbs, Card, Grid } from "@mui/material";
import React from "react";

const FaqPage = function () {
  return (
    <div>
      <div
        style={{
          position: "relative",
          left: "0",
          top: "0",
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
            style={{
              textDecoration: "none",
              color: "#ffffff",
              fontWeight: "bold",
              letterSpacing: "1.78px",
            }}
            className="elc-a-tag"
          >
            ELOCUTION
          </a>
          <a
            href="/faq"
            style={{
              color: "#ffffff",
            }}
          >
            FAQ
          </a>
        </Breadcrumbs>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              color: "white",
              backgroundColor: "#25274d",
              width: "90%",
              marginTop: '2rem',
            //   height: "50px",
              padding: "20px",
            }}
          >
            <p>
              Que. What is an ELOCUTION?
            </p>
            <p>
              Ans. Elocution is a open source AI trained grammar corrector platform. It's very safe and simple to used.  
            </p>
          </Card>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              color: "white",
              backgroundColor: "#25274d",
              width: "90%",
              marginTop: '2rem',
            //   height: "50px",
              padding: "20px",
            }}
          >
            <p>Que. Services overview</p>
            <p>Ans. It's help people by correcting grammar from their sentence.</p>
          </Card>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              color: "white",
              backgroundColor: "#25274d",
              width: "90%",
              marginTop: '2rem',
            //   height: "50px",
              padding: "20px",
            }}
          >
            <p>Que. Privacy and Security</p>
            <p>Ans. We are not storing any of your single data.
            </p>
          </Card>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              color: "white",
              backgroundColor: "#25274d",
              width: "90%",
              marginTop: '2rem',
            //   height: "50px",
              padding: "20px",
            }}
          >
            <p>Que. Legal Information</p>
            <p>Ans. It's just for learning purpose
            </p>
          </Card>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              color: "white",
              backgroundColor: "#25274d",
              width: "90%",
              marginTop: '2rem',
            //   height: "50px",
              padding: "20px",
            }}
          >
            <p>Que. Troubleshooting</p>
            <p>Ans. If unable to get the result, may be services are fail.
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              dicta blanditiis beatae neque magni exercitationem cum perferendis
              alias aliquid veniam obcaecati, consequuntur voluptate sint hic
              placeat omnis a quod architecto.
            </p>
          </Card>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              color: "white",
              backgroundColor: "#25274d",
              width: "90%",
              marginTop: '2rem',
            //   height: "50px",
              padding: "20px",
            }}
          >
            <p>Que. Contribution</p>
            <p>Ans. Everyone is eligible for Contribution, find a bug an report it on the support mail. We will try to short it in our available time.
            </p>
          </Card>
        </Grid>
      </div>
      <div
        style={{
        //   position: "fixed",
          left: "0",
          bottom: "0",
          marginTop: '2rem',
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
export default FaqPage;
