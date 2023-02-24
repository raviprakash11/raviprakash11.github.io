import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React from "react";

const LoadingSpinnerPage = function () {
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
      <CircularProgress sx={{ color: "white" }} />
    </Box>
  );
};
export default LoadingSpinnerPage;
