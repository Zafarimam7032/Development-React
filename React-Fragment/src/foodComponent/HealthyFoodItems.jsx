import style from "../foodComponent/HealthyFoodItems.module.css";
import CustomButton from "../button/CustomButton";

const foodsItems = () => {
  var fooditems = ["Rice", "Dal", "Sabji", "Ghee", "Fruits"];
  var count = 1;
  return (
    <>
      <ol className="list-group">
        {fooditems.map((item) => (
          <li className={`list-group-item ${style.listGroupItem}`} key={item}>
            {count++}. {item}
            <CustomButton></CustomButton>
          </li>
        ))}
      </ol>
    </>
  );
};

export default foodsItems;
