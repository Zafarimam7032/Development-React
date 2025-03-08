import style from "../childprops/container.module.css";

const foodContainer = (child) => {
  return <div className={style.container}>{child.children}</div>;
};

export default foodContainer;
