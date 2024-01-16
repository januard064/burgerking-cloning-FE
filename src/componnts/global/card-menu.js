import Button from "./button";

const CardMenu = (props) => {

    const {name, thumbnail} = props

  return (
    <div
      style={{ borderRadius: "10px", background: "#FFFFFF", padding: "20px", boxShadow:'2px 2px 15px -4px #6B6B6B' }}
    >
      <img
        src={thumbnail}
        alt={name}
        style={{ width: "100%", height: "100%" }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop:5
        }}
      >
        <div style={{ fontFamily:'FlameBold', color:'#8B542F', fontSize:20  }}>{name}</div>
        <Button>Order</Button>
      </div>
    </div>
  );
};

export default CardMenu;
