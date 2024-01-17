import React, { useContext, useEffect, useState } from "react";
import CartProgress from "../../componnts/global/cart-progress";
import { Box, Grid } from "@mui/material";
import Button from "../../componnts/global/button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { getRupiah } from "../../componnts/utils";

const CartPreview = () => {
  const navigate = useNavigate();
  const { cart } = useContext(AppContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sumTotalPrice = 0;

    if (cart.length > 0) {
      cart.forEach((prod) => {
        sumTotalPrice += prod.newPrice;
        setTotalPrice(sumTotalPrice);
      });
    } else {
      setTotalPrice(0);
    }
  }, [cart]);

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
          <CartProgress step={0} />
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
                  <div style={{ padding: "25px 30px" }}>
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        fontFamily: "FlameRegular",
                        fontSize: 16,
                        color: "#404040",
                        borderBottom: "1px solid #e0e0e0",
                        pb: 1,
                      }}
                    >
                      <Grid item xs={6}>
                        Menu Item
                      </Grid>
                      <Grid item xs={3} sx={{ textAlign: "center" }}>
                        Quantity
                      </Grid>
                      <Grid item xs={3} sx={{ textAlign: "center" }}>
                        Subtotal
                      </Grid>
                    </Grid>
                    <div
                      style={{
                        paddingBottom: 16,
                        borderBottom: "1px solid #e0e0e0",
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
                            1
                          </Grid>
                          <Grid item xs={3}>
                            <div style={{ textAlign: "center" }}>
                              <div style={{ color: "#D72300" }}>
                                {getRupiah(product.newPrice)}
                              </div>
                              {product.oldPrice && (
                                <div
                                  style={{
                                    color: "#9F816F",
                                    fontSize: 12,
                                    marginLeft: 8,
                                    textDecoration: "line-through",
                                  }}
                                >
                                  {getRupiah(product.oldPrice)}
                                </div>
                              )}
                            </div>
                          </Grid>
                        </Grid>
                      ))}
                    </div>

                    <div style={{ marginTop:40, paddingBottom:25 }}>
                        <div style={{ fontFamily:'FlameSans', fontSize:13, color:'#404040' }}>Add Notes</div>
                        <input placeholder="Add notes to your order here..." style={{ width:'100%', height:30, borderRadius:6, border:'1px solid #e0e0e0', padding:'4px 8px', marginTop:8 }} />
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} sx={{ padding: "25px 30px" }}>
                <div
                  style={{
                    padding: "25px 30px",
                  }}
                >
                  <div style={{ fontFamily:'FlameSans', fontSize:13, color:'#404040' }}>Order Subtotal*</div>
                  <div style={{ fontFamily:'FlameRegular', fontSize:28, color:'#404040', marginTop:8 }}>{getRupiah(totalPrice)}</div>
                  <div style={{ fontFamily:'FlameSans', fontSize:11, color:'#919191', marginTop:8 }}>*Price might change due to your delivery location.</div>
                  <Button style={{ marginTop:32 }}>Login To Order</Button>
                  <Button
                    variant={"secondary"}
                    style={{ marginTop: 12 }}
                    onClick={() => navigate("/cart/delivery")}
                  >
                    Continue as Guest
                  </Button>
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
