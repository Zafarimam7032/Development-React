import Heading from "./TudoHeading";
import Items from "./item";
import "./tudo.css";

function App() {
  const itemsData = [
    ["Milk", "23/10/2024"],
    ["go to college", "23/10/2024"],
    ["i am done", "23/10/2024"],
  ];
  return (
    <div>
      <center>
        <Heading></Heading>
        <Items item={itemsData}></Items>
      </center>
    </div>
  );
}

export default App;
