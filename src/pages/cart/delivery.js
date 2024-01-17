import React from "react";
import { Box } from "@mui/material";
import CartProgress from "../../componnts/global/cart-progress";

const CartDelivery = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "106px",
          minHeight: "calc(100vh - 156px - 120px )",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "960px" },
            padding: { xs: "0px 20px", md: "0px" },
          }}
        >
          <CartProgress step={1} />
          <div
            style={{
              width: "100%",
              borderRadius: 10,
              background: "#FFFFFF",
              boxShadow: "2px 2px 15px -4px #6B6B6B",
              display: "flex",
              marginTop: 30,
              padding:'25px 30px'
            }}
          >
            <div>Guests Details</div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default CartDelivery;
