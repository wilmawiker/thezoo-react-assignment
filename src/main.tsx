import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Animals } from "./pages/Animals";
import { AnimalDetails } from "./pages/AnimalDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/animals",
    element: <Animals></Animals>,
  },
  {
    path: "/animals/:id",
    element: <AnimalDetails></AnimalDetails>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
