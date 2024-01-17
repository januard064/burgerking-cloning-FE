import React from "react";
import CartProgress from "../../componnts/global/cart-progress";
import { Box, Grid } from "@mui/material";
import Button from "../../componnts/global/button";
import { useNavigate } from "react-router-dom";

const CartPreview = () => {

    const navigate = useNavigate()

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "106px", minHeight: "calc(100vh - 156px - 120px )" }}>
        <Box
          sx={{
            width: { xs: "100%", md: "960px" },
            padding: { xs: "0px 20px", md: "0px" },
          }}
        >
          <CartProgress />
          <div
            style={{
              width: "100%",
              borderRadius: 10,
              background: "#FFFFFF",
              boxShadow: "2px 2px 15px -4px #6B6B6B",
              display: "flex",
              marginTop: 30,
            }}
          >
            <Grid container spacing={2} sx={{}}>
              <Grid item xs={12} md={8}>
                <div
                  style={{
                    borderRight: "1px solid #e0e0e0",
                    height: "100%",
                  }}
                >
                  <div style={{ padding: "25px 30px" }}>Producst</div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} sx={{ padding: "25px 30px" }}>
                <div
                  style={{
                    padding: "25px 30px",
                  }}
                >
                  <Button>Login To Order</Button>
                  <Button variant={'secondary'} style={{ marginTop:12 }} onClick={() => navigate('/cart/delivery')} >Continue as Guest</Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default CartPreview;
