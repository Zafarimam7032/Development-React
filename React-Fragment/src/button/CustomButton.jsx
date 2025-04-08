import style from "./CustomButton.module.css";

const customButton = () => {
  return (
    <>
      <button
        className={style.zbutton}
        onClick={() => console.log(`button have been clincked`)}
      >
        click
      </button>
    </>
  );
};

export default customButton;
