const Button = (props) => {
  const { children, onClick, variant, style } = props;

  return (
    <div
      style={{
        borderRadius: "5px",
        background:
          (variant == "secondary") | (variant == "ternary")
            ? "inherit"
            : "#ED7801",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 40px",
        cursor: "pointer",
        height: "36px",
        border: variant == "ternary" && "1px solid #ED7801",
        ...style,
      }}
      onClick={onClick}
    >
      <div
        style={{
          fontFamily: "FlameRegular",
          color:
            (variant == "secondary") | (variant == "ternary")
              ? "#ED7801"
              : "#FFFFFF",
          fontSize: 16,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Button;
