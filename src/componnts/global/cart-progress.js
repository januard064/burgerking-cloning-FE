import React from "react";
import { useNavigate } from "react-router-dom";

const ActiveProgress = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        ...props.style,
        cursor: "pointer",
      }}
      onClick={props.onClick}
    >
      <div
        style={{
          width: "80%",
          height: 45,
          background: "#faaf18",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          color: "#8B542F",
        }}
      >
        {props.label}
      </div>
      <div
        style={{
          width: "10%",
          height: 0,
          borderTop: "23px solid transparent",
          borderBottom: "23px solid transparent",
          borderLeft: "20px solid #faaf18",
          zIndex: 100,
        }}
      ></div>
    </div>
  );
};

const DefaultProgress = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.isActive ? "#faaf18" : "#fcebd9",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: props.isActive ? "#8B542F" : "#c5a997",

        ...props.style,
      }}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
};

const CartProgress = (props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: 45,
        width: "100%",
        fontFamily: "FlameRegular",
        position: "relative",
        fontSize: 21,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
      }}
    >
      <DefaultProgress
        isActive={props.step == 0}
        label={"Cart"}
        style={{ width: "30%" }}
      />
      <DefaultProgress
        isActive={props.step == 1 || props.step == 2}
        label={"Delivery Info"}
        style={{ width: "35%" }}
        onClick={() => {
          if (props.step == 1 || props.step == 2) {
            navigate("/cart/delivery");
          }
        }}
      />
      <DefaultProgress
        isActive={props.step == 2}
        label={"Payment"}
        style={{ width: "35%" }}
      />

      <ActiveProgress
        isActive={props.step == 0}
        label={"Cart"}
        style={{ width: "40%" }}
        onClick={() => navigate("/cart/preview")}
      />
      {props.step == 1 && (
        <ActiveProgress
          isActive={props.step == 1}
          label={"Delivery Info"}
          style={{ left: "30%", width: "45%" }}
        />
      )}
      {/* {props.step == 2 && (
        <ActiveProgress
          label={"Delivery Info"}
          style={{ left: "70%", width: "30%" }}
        />
      )} */}
    </div>
  );
};

export default CartProgress;
