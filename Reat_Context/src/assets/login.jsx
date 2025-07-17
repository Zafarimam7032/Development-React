import { useContext, useState } from "react";
import UserContext from "../context/Context";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function changeFunction() {
    setUser(username);
  }

  return (
    <>
      <input
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        name=""
        placeholder="userName"
      />{" "}
      <br />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name=""
        placeholder="password"
      />{" "}
      <br />
      <button type="submit" onClick={changeFunction}>
        Login
      </button>
    </>
  );
}

export default Login;
