import React from "react";

function RandomNumber() {
  const number = Math.floor(Math.random() * 100);

  return <p style={{ backgroundColor: "#0fffff" }}>Random Number: {number}</p>;
}

export default RandomNumber;
