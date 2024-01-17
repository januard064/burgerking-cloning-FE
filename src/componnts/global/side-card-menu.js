import React from "react";
import { useNavigate } from "react-router-dom";

const SideCardMenu = (props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: props.isActive ? "#FAAF18" : "#FBE6D6",
        borderRadius: "10px",
        padding: props.isDrawer ? "3px 8px" : "15px 20px",
        minHeight: props.isDrawer ? "40px" : "",
        display: "flex",
        alignItems: "center",
        width: props.isDrawer ? "" : "100%",
        marginTop: 8,
        cursor: "pointer",
      }}
      onClick={() => (props.path ? navigate(`/menus/${props.path}`) : "")}
    >
      <div style={{ fontFamily: "FlameRegular", color: "#502314" }}>
        {props.name}
      </div>
    </div>
  );
};

export default SideCardMenu;
