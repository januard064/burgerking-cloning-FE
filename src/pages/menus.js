import { Box } from "@mui/material";
import { HOME_MENU } from "../componnts/dummy-data/home-menus-data";
import { Grid } from "@mui/material";
import CardMenu from "../componnts/global/card-menu";
import SideCardMenu from "../componnts/global/side-card-menu";
import { useParams } from "react-router-dom";

const Menus = () => {

    const param = useParams();
    console.log({param})

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "106px" }}>
      <Box
        sx={{
          width: { xs: "100%", md: "960px" },
          padding: { xs: "0px 20px", md: "0px" },
          display: "flex",
        }}
      >
        <Box sx={{ width: "calc(30% - 140px)", mr: "80px" }}>
          <Box sx={{ width: "100%", height: "200px" }}>
            {HOME_MENU.map((menu, index) => (
              <SideCardMenu key={index} name={menu.name} isActive={param.menuId ? menu.menuId == param.menuId : index ===0} path={menu.menuId} />
            ))}
          </Box>
        </Box>
        <Box sx={{ width: "70%" }}>
          <Grid container spacing={2} sx={{}}>
            {HOME_MENU.map((menu, index) => (
              <Grid key={index} item xs={6} md={6}>
                <CardMenu name={menu.name} thumbnail={menu.thumbnail} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Menus;
