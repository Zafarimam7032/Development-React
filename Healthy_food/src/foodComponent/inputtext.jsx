import style from "./inputtext.module.css";

function inputtext() {
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="input text"
        className={style.txt}
        onChange={() => console.log("this onchage event")}
      />
    </>
  );
}

export default inputtext;
