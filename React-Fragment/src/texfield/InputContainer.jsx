import style from "../texfield/InputContainer.module.css";

const inputtext = ({ evenListen }) => {
  return (
    <>
      <input
        className={style.zinput}
        type="text"
        name=""
        id=""
        placeholder="Enter the text"
        onChange={evenListen}
      />
    </>
  );
};

export default inputtext;
