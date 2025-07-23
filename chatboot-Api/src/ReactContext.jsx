import React, { createContext, useState } from "react";
import UserContext from "./context/Context";

const userContext = UserContext;

const UserProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  return (
    <userContext.Provider value={{ message, setMessage }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
