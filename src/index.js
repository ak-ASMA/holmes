import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import ContactUs from "./routes/ContactUs";
import AboutUs from "./routes/AboutUs";
import Profile from "./routes/Profile";
import Product from "./routes/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/rooms",
    element: <Product />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);