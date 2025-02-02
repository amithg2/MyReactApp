import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ManufacterPage from "./ManufacterPage.jsx";
import "./index.css";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "manufacter/:name",
    element: <ManufacterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
