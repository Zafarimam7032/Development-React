import style from "./foodItem.module.css";

const item = ["Roti", "Sabji", "Milk", "Curd", "Ghee", "Apple"];
function foodItem() {
  return (
    <div>
      <ol>
        {item.map((itm) => (
          <li className={style.listitem}>
            {itm}
            <button className={`${style.zbutton} btn btn-success`}>buy</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default foodItem;
