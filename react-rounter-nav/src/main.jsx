import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./Header/header.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout.jsx";
import Contect from "./contact/contect.jsx";
import Home from "./home/home.jsx";
import About from "./about/about.jsx";
import GitHub from "./github/GitHubPhoto.jsx";
import Projects from "./project/Project.jsx";

const rounter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<Projects />}></Route>
      <Route path="contact" element={<Contect />}></Route>
      <Route loader={GitHub} path="aboutdetails" element={<About />}></Route>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rounter} />
  </StrictMode>
);
