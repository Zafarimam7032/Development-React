import { useCallback, useEffect, useState } from "react";

function textEditor() {
  const [number, setNumber] = useState(false);
  const [special, setSpeccialCharactor] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  function passwordGenerator(length, isnumber, specialCharator, setPassword) {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    if (isnumber) {
      chars += "0123456789";
    }
    if (specialCharator) {
      chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    for (let i = 0; i <= length; i++) {
      const charIndex = Math.floor(Math.random() * chars.length + 1);
      password += chars[charIndex];
    }
    setPassword(password);
  }

  const passwordGen = useCallback(
    () => passwordGenerator(length, number, special, setPassword),
    [number, special, length]
  );
  useEffect(() => passwordGen(), [passwordGen]);

  return (
    <>
      <center>
        <div>
          <h6 className="font-bold pb-6 pt-8">Password Generetor</h6>
          <input
            className="border-black border h-14 rounded-xl w-96 m-3"
            type="text"
            name=""
            value={password}
            readOnly
          />
          <button
            className="bg-green-500 p-4 pl-6 pr-6 rounded-xl"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
          <br />
          <input
            min={8}
            max={32}
            onChange={(e) => setLength(Number(e.target.value))}
            className="m-4"
            type="range"
            value={length}
          />
          <span className="font-bold text-teal-600">Range: {length}</span>
          <input
            className="m-4 font-bold"
            type="checkbox"
            name=""
            onChange={(e) => setSpeccialCharactor(e.target.checked)}
          />
          <span className="font-bold text-teal-600">
            Charector:{special ? "yes" : "no"}
          </span>
          <input
            className="m-4 font-bold"
            type="checkbox"
            name=""
            onChange={(e) => setNumber(e.target.checked)}
          />
          <span className="font-bold text-teal-600">
            Number:{number ? "yes" : "no"}
          </span>
        </div>
      </center>
    </>
  );
}

export default textEditor;
