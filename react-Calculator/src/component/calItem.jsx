import style from "./calltem.module.css";

const buttons = ({ btns }) => {
  return (
    <>
      {btns.map((itn) => (
        <input className={style.zbutton} type="button" value={itn} />
      ))}
    </>
  );
};

export default buttons;
