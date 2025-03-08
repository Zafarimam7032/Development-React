import React, { useState } from "react";
import Customfrag from "./CustomFragment";
import HealthyFoodItems from "./foodComponent/HealthyFoodItems";
import FoodContainer from "./childprops/container";
import Inputtext from "./texfield/InputContainer";
function App() {
  var [userhooks, userState] = useState("this is first user state");

  const evenListen = (event) => {
    console.log(event.target.value);
    userState(event.target.value);
  };

  return (
    <>
      <FoodContainer>
        <center>
          <h1>Food Menu</h1>
          <Inputtext evenListen={evenListen}></Inputtext>
          <h6>{userhooks}</h6>
        </center>
        <HealthyFoodItems></HealthyFoodItems>
      </FoodContainer>
      <FoodContainer>
        <Customfrag></Customfrag>
      </FoodContainer>
    </>
  );
}

export default App;
