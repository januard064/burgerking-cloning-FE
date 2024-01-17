import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Drawer } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

import CloseIcon from "@mui/icons-material/Close";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pageMenus = [
  {
    title1: "Delivery",
    title2: "Order",
    path: "/menus",
  },
  {
    title1: "Get Fresh",
    title2: "Promotions",
    path: "/news-v1",
  },
  {
    title1: "Exclusive",
    title2: "Large Order",
    path: "/",
  },
];

const PageMenu = (props) => {
  return (
    <Link to={props.path} style={{ textDecoration: "none" }}>
      <div
        style={{
          height: "100%",
          position: "relative",
          alignItems: "center",
          display: "flex",
          marginRight: 44,
        }}
        onClick={props.toggleDrawer}
      >
        <div>
          <Typography
            sx={{
              fontFamily: "FlameRegular",
              fontSize: 12,
              color: "#FAAF18",
            }}
          >
            {props.title1}
          </Typography>
          <Typography
            sx={{
              fontFamily: "FlameBold",
              color: "#FFFFFF",
              fontSize: 25,
            }}
          >
            {props.title2}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

function Navbar() {
  const { cart } = useContext(AppContext);

  const [stateDrower, setStateDrower] = useState(false);

  const toggleDrawer = () => {
    setStateDrower(!stateDrower);
  };

  let navigate = useNavigate();

  return (
    <>
      <AppBar
        // position="static"
        elevation={0}
        sx={{
          background: "#2D2D2D",
          height: 76,
          position: "fixed",
          top: 0,
          zIndex: 1500,
        }}
      >
        <Container maxWidth="lg" sx={{ pr:0,pl:0 }}>
          <Toolbar disableGutters>
            <Box
              sx={{
                alignItems: "end",
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer}
                color="inherit"
              >
                {stateDrower ? (
                  <CloseIcon sx={{ color: "#FAAF18" }} />
                ) : (
                  <MenuIcon sx={{ color: "#FAAF18" }} />
                )}
              </IconButton>
            </Box>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                width: "100%",
                height: 76,
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                src="https://bkdelivery.co.id/static/website/img/logo_2022_x2.6bb6d972f0a5.png"
                alt="logo"
                style={{ height: 40, width: 40 }}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                height: 76,
              }}
            >
              <div
                style={{ marginRight: 35, marginTop: 10, cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <img
                  src="https://bkdelivery.co.id/static/website/img/logo_2022_x2.6bb6d972f0a5.png"
                  alt="logo"
                  style={{ height: 90, width: 90 }}
                />
              </div>
              {pageMenus.map((menu, index) => (
                <PageMenu
                  key={index}
                  title1={menu.title1}
                  title2={menu.title2}
                  path={menu.path}
                />
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  fontFamily: "FlameRegular",
                  color: "#FFFFFF",
                  fontSize: 20,
                  mr: 4,
                  display: { xs: "none", md: "flex" },
                }}
              >
                LOGIN
              </Typography>
              <Link
                to={"/cart/preview"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box
                  sx={{
                    height: 76,
                    width: 60,
                    display: "flex",
                    alignItems: "center",
                    background: "#ED7801",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {cart.length > 0 && (
                    <div
                      style={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        top: 15,
                        right: 10,
                        background: "#FF0000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 14,
                      }}
                    >
                      {cart.length}
                    </div>
                  )}

                  <ShoppingCartIcon color={"#FFFFFF"} sx={{ fontSize: 30 }} />
                </Box>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor={"top"}
        open={stateDrower}
        onClose={toggleDrawer}
        sx={{
          "&.MuiDrawer-root .MuiDrawer-paper": { marginTop: "67px" },
        }}
      >
        <Box sx={{ height: "100vh", background: "#2d2d2d", pt: 8 }}>
          <Box
            sx={{
              padding: "0px 20px",
            }}
          >
            <PageMenu title2={"Home"} path={"/"} toggleDrawer={toggleDrawer} />
            {pageMenus.map((menu, index) => (
              <Box key={index} sx={{ my: 2 }}>
                <PageMenu
                  title1={menu.title1}
                  title2={menu.title2}
                  path={menu.path}
                  toggleDrawer={toggleDrawer}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
export default Navbar;
