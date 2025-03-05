import React from "react";
import Customfrag from "./CustomFragment";

function App() {
  return (
    <React.Fragment>
      <h1>Food Menu</h1>
      <ul class="list-group">
        <li class="list-group-item">Rice</li>
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Ghee</li>
        <li class="list-group-item">Fruit</li>
        <li class="list-group-item">Sweets</li>
      </ul>
      <Customfrag></Customfrag>
    </React.Fragment>
  );
}

export default App;
