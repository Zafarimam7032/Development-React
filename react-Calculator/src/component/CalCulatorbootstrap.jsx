import style from "./customDisplay.module.css";
import Buttons from "./calItem";
function customDisplay() {
  const buttonsdata = [
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    "%",
    "0",
    "C",
  ];
  return (
    <>
      <center>
        <h1>Calculator</h1>
        <div className={style.container}>
          <input
            type="text"
            className={style.formControl}
            placeholder="00"
            aria-label="calculator"
          />
          <Buttons btns={buttonsdata}></Buttons>
        </div>
      </center>
    </>
  );
}

export default customDisplay;
