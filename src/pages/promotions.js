import React from "react";
import { Box } from "@mui/material";

import { PRMOTIONS_DATA } from "../componnts/dummy-data/promotions";

const Promotions = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: { xs: "100%", md: "960px" },
          padding: { xs: "0px 20px", md: "0px" },
        }}
      >
        {PRMOTIONS_DATA.map((promo, index) => (
          <img key={index} src={promo.thumbnail} alt="promotions-banner" style={{ width:'100%', marginTop:32 }}/>
        ))}
      </Box>
    </Box>
  );
};

export default Promotions;
