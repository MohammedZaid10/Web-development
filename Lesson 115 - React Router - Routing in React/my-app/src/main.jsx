import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import App from "./App";
import About from "./pages/About";
import NavBar from "../components/Navbar";
import User from "./User";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />, // homepage
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user/:username",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
