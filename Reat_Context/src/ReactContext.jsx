import React, { createContext, useState } from "react";
import UserContext from "./context/Context";

const userContext = UserContext;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
