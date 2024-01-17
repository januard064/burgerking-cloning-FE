const ActiveProgress = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        ...props.style,
      }}
    >
      <div style={{ width: "80%", height: 45, background: "#faaf18", alignItems:'center', display:'flex', justifyContent:'center', color:'#8B542F' }}>{props.label}</div>
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
        backgroundColor: "#fcebd9",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...props.style,
      }}
    >
      {props.label}
    </div>
  );
};

const CartProgress = () => {
  return (
    <div
      style={{
        height: 45,
        color: "#c5a997",
        width: "100%",
        fontFamily: "FlameRegular",
        position: "relative",
        fontSize: 21,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
      }}
    >
      <DefaultProgress label={"Cart"} style={{ width: "30%" }} />
      <DefaultProgress label={"Delivery Info"} style={{ width: "40%" }} />
      <DefaultProgress label={"Payment"} style={{ width: "30%" }} />
      
      <ActiveProgress label={'Cart'} style={{width:'30%' }} />
      {/* <ActiveProgress label={"Delivery Info"} style={{ left: "30%", width:'40%' }} />
      <ActiveProgress label={"Delivery Info"} style={{ left: "70%", width:'30%' }} /> */}
    </div>
  );
};

export default CartProgress;
