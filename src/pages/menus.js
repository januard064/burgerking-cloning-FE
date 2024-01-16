import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { HOME_MENU } from "../componnts/dummy-data/home-menus-data";
import { Grid } from "@mui/material";
import CardMenu from "../componnts/global/card-menu";
import SideCardMenu from "../componnts/global/side-card-menu";
import { useParams } from "react-router-dom";

import {
  PRODUCTS_BEVERAGES,
  PRODUCTS_BKAPP,
  PRODUCTS_CHEESE,
  PRODUCTS_CHEESEBURGER,
  PRODUCTS_CHEESEW,
  PRODUCTS_GOLD,
  PRODUCTS_HEINZ,
  PRODUCTS_KIDSMEAL,
  PRODUCTS_KING,
  PRODUCTS_KINGDEALS,
  PRODUCTS_KINGSCHICKEN,
  PRODUCTS_PROMO,
  PRODUCTS_SIDEDESSERT,
} from "../componnts/dummy-data/products";

const Menus = () => {
  const param = useParams();

  const [products, setProducts] = useState(PRODUCTS_BKAPP);

  // dummy fetch

  useEffect(() => {
    switch (param?.menuId) {
      case "bk-app-exclusive":
        setProducts(PRODUCTS_BKAPP);
        break;
      case "promo-hari-ini-6":
        setProducts(PRODUCTS_PROMO);
        break;
      case "new-cheese-dunk-limited-time-offer":
        setProducts(PRODUCTS_CHEESE);
        break;
      case "new-king-fusion-nutella-limited-time-offer":
        setProducts(PRODUCTS_KING);
        break;
      case "heinz-mexican-whopper":
        setProducts(PRODUCTS_HEINZ);
        break;
      case "gold-collection-5":
        setProducts(PRODUCTS_GOLD);
        break;
      case "cheese-whopper-4":
        setProducts(PRODUCTS_CHEESEW);
        break;
      case "cheeseburger-favoriter":
        setProducts(PRODUCTS_CHEESEBURGER);
        break;
      case "kings-chicken-rasa-baru":
        setProducts(PRODUCTS_KINGSCHICKEN);
        break;
      case "kids-meal":
        setProducts(PRODUCTS_KIDSMEAL);
        break;
      case "side-dessert":
        setProducts(PRODUCTS_SIDEDESSERT);
        break;
      case "beverages":
        setProducts(PRODUCTS_BEVERAGES);
        break;
      case "king-deals":
        setProducts(PRODUCTS_KINGDEALS);
        break;
      default:
        setProducts(PRODUCTS_BKAPP);
    }

    window.scrollTo(0, 0);
  }, [param]);

  useEffect(() => {
    console.log({ products });
  }, [products]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "106px",
        minHeight: "calc(100vh - 76px - 120px )",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "960px" },
          padding: { xs: "0px 20px", md: "0px" },
          display: "flex",
        }}
      >
        <Box sx={{ width: "calc(30% - 140px)", mr: "80px" }}>
          <Box sx={{ width: "100%" }}>
            {HOME_MENU.map((menu, index) => (
              <SideCardMenu
                key={index}
                name={menu.name}
                isActive={
                  param.menuId ? menu.menuId == param.menuId : index === 0
                }
                path={menu.menuId}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ width: "calc(80%)" }}>
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={4} sx={{}}>
              {products.map((menu, index) => (
                <Grid key={index} item xs={6} md={6}>
                  <CardMenu menu={menu} isDetail={true} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Menus;
