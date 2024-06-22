import React from "react";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Menu } from "@mui/material";

export default function MenuBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          padding: "40px 20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <CottageOutlinedIcon sx={{ fontSize: "34px" }} />
          <div
            style={{ fontSize: "16px", fontWeight: "500", color: "#D3D3D3" }}
          >
            RAVISALPINE
          </div>
        </div>
        <div onClick={handleClick}>
          <AppsOutlinedIcon sx={{ fontSize: "34px", cursor: "pointer" }} />
        </div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div style={{ padding: "10px", width: "240px" }}>
            <div
              style={{ fontSize: "18px", fontWeight: "300", color: "#d1d1d1" }}
            >
              Let's Connect.
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "20px",
                padding: "10px 10px",
              }}
            >
              <div>
                <InstagramIcon sx={{ fontSize: "40px", cursor: "pointer" }} />
              </div>
              <div>
                <GoogleIcon sx={{ fontSize: "40px", cursor: "pointer" }} />
              </div>
              <div>
                <LinkedInIcon sx={{ fontSize: "40px", cursor: "pointer" }} />
              </div>
              <div>
                <EmailIcon sx={{ fontSize: "40px", cursor: "pointer" }} />
              </div>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
}
