import React from "react";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Phone = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <LocalPhoneIcon sx={{ fontSize: 20 }} />
      <div>15000 25</div>
    </div>
  );
};

const Email = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginLeft: 30 }}>
      <EmailIcon sx={{ fontSize: 18, mr: 0.5 }} />
      <div>guestservice@burgerking.co.id</div>
    </div>
  );
};

const Separator = () => {
  return <span style={{ margin: "0px 12px" }}> | </span>;
};

const Footer = () => {
  return (
    <footer style={{ background: "#2D2D2D", width: "100%", height: 120 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: { xs: "100%", md: "960px" },
            padding: { xs: "0px 20px", md: "0px" },
          }}
        >
          <div
            style={{
              marginTop: 12,
              fontFamily: "FlameRegular",
              fontSize: 20,
              color: "#FFFFFF",
            }}
          >
            BURGER KING® DELIVERY
          </div>
          <div
            style={{
              marginTop: 12,
              fontFamily: "FlameRegular",
              fontSize: 18,
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Phone />
            <Email />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: 30,
              }}
            >
              <FacebookIcon sx={{ fontSize: 18 }} />
              <InstagramIcon sx={{ ml: 1, fontSize: 18 }} />
              <TwitterIcon sx={{ ml: 1, fontSize: 18 }} />
              <YouTubeIcon sx={{ ml: 1, fontSize: 18 }} />
            </div>
          </div>
          <div
            style={{
              marginTop: 16,
              fontFamily: "FlameSans",
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              color: "#919191",
            }}
          >
            About Us <Separator /> Kebijakan Privasi <Separator /> Syarat dan
            Ketentuan <Separator /> TM & © 2024 Burger King Corporation. Used
            Under License. All rights reserved.
          </div>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
