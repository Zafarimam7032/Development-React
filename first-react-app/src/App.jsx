import RandomNumber from "./randomComponent";

function HelloWorld() {
  return (
    <div>
      <h1>This is a Hello World application</h1>
      <h3>
        <RandomNumber />
        <RandomNumber />
        <RandomNumber />
        <RandomNumber />
        <RandomNumber />
        <RandomNumber />
      </h3>
    </div>
  );
}

export default HelloWorld;
