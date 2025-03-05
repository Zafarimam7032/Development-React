import Items from "./items";

function itemGroup({ foods }) {
  // const foods = props.foods;
  // const { foods } = props;
  return (
    <ul className="list-group">
      {foods.map((item) => (
        <Items key={item} itemValue={item}></Items>
      ))}
    </ul>
  );
}

export default itemGroup;
