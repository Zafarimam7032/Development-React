import React, { useState } from "react";
import ReactContext from "../ReactContext";

function UserContextProvider() {
  const [user, setUser] = useState("");
  return (
    <>
      <ReactContext.provider value={{ user, setUser }}>
        {children}
      </ReactContext.provider>
    </>
  );
}

export default UserContextProvider;
