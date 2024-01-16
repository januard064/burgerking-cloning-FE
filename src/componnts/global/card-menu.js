import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import { getRupiah } from "../utils";

const CardMenu = (props) => {
  const { menu, handleOrder, isDetail } = props;

  const navigate = useNavigate();

  const handleClickCard = () => {
    if (isDetail) {
      navigate(`/product/${menu.id}`);
    } else {
      handleOrder();
    }
  };

  return (
    <div
      style={{
        borderRadius: "10px",
        background: "#FFFFFF",
        padding: "20px",
        boxShadow: "2px 2px 15px -4px #6B6B6B",
        minHeight: isDetail ? 280 : 250,
        cursor: "pointer",
      }}
      onClick={handleClickCard}
    >
      {menu.thumbnail !== "" && (
        <img
          src={menu.thumbnail}
          alt={menu.name}
          style={{ width: "100%", height: "192px" }}
        />
      )}

      {!isDetail ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <div
            style={{ fontFamily: "FlameBold", color: "#8B542F", fontSize: 20 }}
          >
            {menu.name}
          </div>
          <Button>Order</Button>
        </div>
      ) : (
        <div>
          <div
            style={{
              fontFamily: "FlameRegular",
              color: "#502314",
              fontSize: 20,
            }}
          >
            {menu.name}
          </div>
          <div style={{ marginTop: 8, display: "flex", alignItems: "end" }}>
            <div
              style={{
                fontFamily: "FlameRegular",
                color: "#D72300",
                fontSize: 16,
              }}
            >
              {getRupiah(menu.newPrice)}
            </div>
            {menu.oldPrice && (
              <div
                style={{
                  fontFamily: "FlameRegular",
                  color: "#9F816F",
                  fontSize: 12,
                  marginLeft: 8,
                  textDecoration: "line-through",
                }}
              >
                {getRupiah(menu.oldPrice)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardMenu;
