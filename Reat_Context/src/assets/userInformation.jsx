import { useContext } from "react";
import UserContext from "../context/Context";

function UserInformation() {
  const { user } = useContext(UserContext);
  return <>{!user ? <h2>please login</h2> : <h2>welcome {user}</h2>}</>;
}

export default UserInformation;
