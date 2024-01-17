import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import CartProgress from "../../componnts/global/cart-progress";
import Button from "../../componnts/global/button";
import { AppContext } from "../../App";
import { getRupiah } from "../../componnts/utils";

const CartPayment = () => {
  const { cart, totalPrice } = useContext(AppContext);
  return (
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
        <CartProgress step={2} />
        <div
          style={{
            width: "100%",
            borderRadius: 10,
            background: "#FFFFFF",
            boxShadow: "2px 2px 15px -4px #6B6B6B",
            display: "flex",
            marginTop: 30,
            color: "#404040",
          }}
        >
          <Grid container>
            <Grid xs={12} md={6}>
              <div
                style={{
                  borderRight: "1px solid #e0e0e0",
                  padding: "25px 30px",
                }}
              >
                <div
                  style={{
                    fontFamily: "FlameRegular",
                    fontSize: 16,
                    paddingBottom: 16,
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  Order Sumamry
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #e0e0e0",
                    paddingBottom: 8,
                  }}
                >
                  {cart.map((product) => (
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        fontFamily: "FlameSans",
                        fontSize: 13,
                        color: "#404040",
                        pt: 2,
                      }}
                    >
                      <Grid item xs={6}>
                        {product.name}
                      </Grid>
                      <Grid item xs={3} sx={{ textAlign: "center" }}>
                        x1
                      </Grid>
                      <Grid item xs={3}>
                        <div style={{ textAlign: "end" }}>
                          <div style={{ color: "#404040" }}>
                            {getRupiah(product.newPrice)}
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "FlameRegular",
                    fontSize: 23,
                    marginTop: 8,
                  }}
                >
                  <div>TOTAL</div>
                  <div> {getRupiah(totalPrice)}</div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} md={6}>
              <div
                style={{
                  padding: "25px 30px",
                }}
              >
                <div style={{ fontFamily: "FlameSans", fontSize: 13 }}>
                  Deliver To
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 8,
                  }}
                >
                  <Button variant={"ternary"}>Apply Kupon/Promo Code</Button>
                  <div style={{ fontFamily: "FlameBold", fontSize: 28 }}>
                    {getRupiah(totalPrice)}
                  </div>
                </div>
                <Button style={{ marginTop: 30 }}>Place My Order</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default CartPayment;
