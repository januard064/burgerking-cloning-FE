import React, { useEffect, useState, useContext } from "react";
import { Grid, Box } from "@mui/material";
import { HOME_MENU } from "../componnts/dummy-data/home-menus-data";
import SideCardMenu from "../componnts/global/side-card-menu";
import { ALLPRODUCST } from "../componnts/dummy-data/products";
import { useParams } from "react-router-dom";
import { getRupiah } from "../componnts/utils";
import { AppContext } from "../App";
import Button from "../componnts/global/button";

const DetailProduct = () => {
  const param = useParams();
  const { handleAddToCart } = useContext(AppContext);

  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    const product = ALLPRODUCST.find((prod) => prod.id == param.productId);

    setSelectedProduct(product);
  }, [param.productId]);

  if (!selectedProduct) {
    return <></>;
  }

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
                isActive={selectedProduct?.menuId == menu.menuId}
                path={menu.menuId}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ width: "calc(80%)" }}>
          <div
            style={{
              width: "100%",
              borderRadius: 10,
              background: "#FFFFFF",
              boxShadow: "2px 2px 15px -4px #6B6B6B",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "60%",
                textAlign: "center",
                padding: "35px 20px",
                borderRight: "1px solid #e0e0e0",
              }}
            >
              <div style={{ fontFamily: "FlameRegular", fontSize: 30 }}>
                {selectedProduct?.name}
              </div>
              {selectedProduct?.detail && (
                <div
                  style={{
                    marginTop: 10,
                    fontFamily: "FlameSans",
                    fontSize: 14,
                  }}
                >
                  {selectedProduct?.detail}
                </div>
              )}
              <div style={{ textAlign: "left" }}>
                <img
                  src={selectedProduct?.thumbnail}
                  alt={selectedProduct?.name}
                  style={{ width: 270, height: "auto", marginTop: 20 }}
                />
              </div>
            </div>
            <div style={{ width: "40%", padding: "35px 20px" }}>
              <div style={{ fontFamily: "FlameRegular", fontSize: 28, marginBottom:25 }}>
                {getRupiah(selectedProduct?.newPrice)}
              </div>

              <Button
                onClick={() => {
                  handleAddToCart(selectedProduct);
                }}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailProduct;
