const items = ({ itemValue }) => {
  console.log(itemValue);

  return <li className="list-group-item">{itemValue}</li>;
};

export default items;
