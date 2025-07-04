import React, { useState } from "react";
import ButtonColor from "./colorButton";
function BgChanger() {
  const [bgColor, setBgColor] = useState("lightblue");

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh", padding: "2rem" }}>
      <h1 style={{ color: "#333" }}>Background: {bgColor}</h1>
      <div className="bg-white p-2 rounded-xl justify-center flex">
        <ButtonColor color="red" setBgColor={setBgColor} />
        <ButtonColor color="green" setBgColor={setBgColor} />
        <ButtonColor color="yellow" setBgColor={setBgColor} />
        <ButtonColor color="black" setBgColor={setBgColor} />
        <ButtonColor color="orange" setBgColor={setBgColor} />
        <ButtonColor color="lavender" setBgColor={setBgColor} />
        <ButtonColor color="blue" setBgColor={setBgColor} />
      </div>
    </div>
  );
}

export default BgChanger;
