const InputField = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      style={{
        width: "100%",
        height: 30,
        borderRadius: 6,
        border: "1px solid #e0e0e0",
        padding: "4px 8px",
        marginTop: 8,
        fontFamily:'FlameSans'
      }}
      name={props.name}
    />
  );
};

export default InputField;
