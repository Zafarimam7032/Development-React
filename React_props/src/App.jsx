import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Frame from "./frame";
import Card from "./Cards";

function App() {
  let message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit quasi nulla, dolor expedita, tenetur aut omnis, deleniti vitae ipsum quidem accusamus quisquam impedit inventore delectus hic! In aliquam soluta mollitia aut? Praesentium, repudiandae dolorem architecto magnam quas vero possimus?";
  return (
    <>
      <Frame message="this is first react Heading" />
      <Frame message="this is second react Heading" />
      <div className="flex flex-wrap">
        <Card heading={"first react heading"} messgae={message} />
        <Card heading={"first second react heading"} messgae={message} />
      </div>
    </>
  );
}

export default App;
