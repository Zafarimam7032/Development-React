import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./assets/login";
import UserInformation from "./assets/userInformation";
import UserProvider from "./ReactContext";

function App() {
  return (
    <UserProvider>
      <Login />
      <UserInformation />
    </UserProvider>
  );
}

export default App;
