import CarouselHome from "../componnts/global/carousel/carousel-home";
import { Grid, Box } from "@mui/material";
import styled from "@emotion/styled";
import CardMenu from "../componnts/global/card-menu";

import { HOME_MENU } from "../componnts/dummy-data/home-menus-data";

const HomePage = () => {
  return (
    <>
      <CarouselHome />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontFamily: "FlameBold",
          fontSize: 32,
          color:'#8B542F',
          marginTop:32
        }}
      >
        Our Menus
      </div>
      <Box sx={{ display: "flex", justifyContent: "center", mt:4 }}>
        <Box sx={{ width:{ xs:'100%', md:'960px' }, padding:{xs:'0px 20px', md:'0px'} }}>
          <Grid container spacing={2} sx={{}}>
            {HOME_MENU.map((menu, index) => (
              <Grid key={index} item xs={6} md={4}>
                <CardMenu name={menu.name} thumbnail={menu.thumbnail} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
