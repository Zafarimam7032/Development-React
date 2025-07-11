import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/header";
import Home from "./home/home";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
