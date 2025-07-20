import Heading from "../assets/heading/Heading";
import { Outlet } from "react-router-dom";
import DisplayAndInput from "../textField/DisplayAndInput";
import Display from "../display/display";

function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <Heading />
      <div className="flex-grow overflow-hidden">
        <Display />
      </div>
      <Outlet />
      <DisplayAndInput />
    </div>
  );
}

export default Layout;
