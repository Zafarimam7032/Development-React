function ButtonColor({ color, setBgColor }) {
  return (
    <button
      className="m-2 rounded-lg"
      onClick={() => setBgColor(color)}
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: color,
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {color}
    </button>
  );
}

export default ButtonColor;
