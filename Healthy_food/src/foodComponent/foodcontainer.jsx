import style from "./foodCantainer.module.css";
import FoodItem from "./foodItem.jsx";
import Inputtext from "./inputtext.jsx";

function foodContainer() {
  return (
    <>
      <div className={style.container}>
        <Inputtext></Inputtext>
        <FoodItem></FoodItem>
      </div>
    </>
  );
}

export default foodContainer;
