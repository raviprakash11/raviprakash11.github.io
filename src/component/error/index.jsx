import SignalWifiStatusbarConnectedNoInternet4Icon from "@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const ErrorPage = function () {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25244d",
        minHeight: "100vh",
        minWidth: "100%",
      }}
    >
      <SignalWifiStatusbarConnectedNoInternet4Icon
        sx={{ color: "white", fontSize: "7.5rem" }}
      />
      <p
        style={{
          fontSize: "17px",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Oops ! Something went wrong..
        <br />
        Do you want to navigate back ? <br />
        <Link href="/" sx={{ marginLeft: "1rem", paddingTop: "24px" }}>
          Click me !
        </Link>
      </p>
    </Box>
  );
};
export default ErrorPage;
