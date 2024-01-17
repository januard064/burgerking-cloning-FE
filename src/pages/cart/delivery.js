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
          <div>Preview Cart</div>
        </Box>
      </Box>
    </>
  );
};

export default CartDelivery;
