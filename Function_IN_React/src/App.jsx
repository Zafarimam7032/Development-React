import ItemGroup from "./Itemdata";

function App() {
  const foods = ["Rice", "Dal", "Ghee", "Fruit", "Sweets"];
  // const foods = [];
  // if (foods.length == 0) {
  //   return <h1>this food is empty</h1>;
  // }
  return (
    <>
      <h1>Food Menu</h1>
      {foods.length == 0 ? <h1>this food is empty</h1> : null}
      <ItemGroup foods={foods}></ItemGroup>
    </>
  );
}

export default App;
