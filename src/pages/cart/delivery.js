import React from "react";
import { Box, Grid } from "@mui/material";
import CartProgress from "../../componnts/global/cart-progress";
import InputField from "../../componnts/global/input-field";
import Button from "../../componnts/global/button";
import { useNavigate } from "react-router-dom";

const CartDelivery = () => {
  const navigate = useNavigate();
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
            }}
          >
            <Grid container>
              <Grid xs={12} md={5}>
                <div
                  style={{
                    borderRight: "1px solid #e0e0e0",
                    padding: "25px 30px",
                  }}
                >
                  <div style={{ fontWeight: "bolder" }}>GUEST DETAILS</div>
                  <InputField placeholder="Full Name" name="fullname" />
                  <InputField placeholder="Mobile Number" name="mobilenumber" />
                </div>
              </Grid>
              <Grid xs={12} md={7}>
                <div
                  style={{
                    padding: "25px 30px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "FlameRegular",
                      fontSize: 23,
                      color: "#8b542f",
                    }}
                  >
                    Lokasi Pengantaran
                  </div>

                  <div
                    style={{
                      fontFamily: "FlameSans",
                      fontSize: 16,
                      color: "#404040",
                      marginTop: 24,
                    }}
                  >
                    <div>1. Set Lokasi Pengantaran di Peta</div>
                    <div>
                      Pastikan pin lokasi sudah sesuai dengan lokasi pengantaran
                    </div>

                    <iframe
                      src={`https://maps.google.com/maps?q=${-6.241366861},${106.801849361}&hl=es;&output=embed`}
                      // height="450"
                      // width="600"
                      style={{ border: 0, width: "100%" }}
                      className="h-[343px] w-full"
                      loading="lazy"
                      title="maps"
                    />

                    <div style={{ marginTop: 12 }}>
                      2. Berikan Alamat Lengkap
                    </div>
                    <div>
                      Tambahkan catatan atau acuan jika perlu (contoh: "di
                      sebelah salon")
                    </div>
                    <textarea
                      style={{
                        width: "100%",
                        height: 80,
                        borderRadius: 6,
                        border: "1px solid #e0e0e0",
                        padding: "4px 8px",
                        marginTop: 8,
                        fontFamily: "FlameSans",
                      }}
                      placeholder="Mohon Set Lokasi Pengantaran di peta sebelum mengisi alamat pengantaran"
                    />

                    <Button
                      onClick={() => navigate("/cart/payment")}
                      style={{ marginTop: 8 }}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default CartDelivery;
