const Button = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        borderRadius: "5px",
        background: "#ED7801",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding:'0px 40px',
        cursor:'pointer',
        height:'36px'
      }}
    >
      <div style={{ fontFamily:'FlameRegular', color:'#FFFFFF', fontSize:16 }}>{children}</div>
    </div>
  );
};

export default Button;
