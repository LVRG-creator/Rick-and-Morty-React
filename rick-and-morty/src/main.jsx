// Assignment 1 main.jsx (the “hello world but with React Router” version)
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import router from "./router";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

// Assignment 2 main.jsx (we added bootstrap and felt unstoppable)
// import "bootstrap/dist/css/bootstrap.min.css";

// Assignment 3 main.jsx (literally nothing changed lol)

// Assignment 4 main.jsx (final form)
// honestly still the same, main.jsx is the chillest file in the whole project

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import './index.css'

// global styles (bootstrap, tailwind, whatever you want)
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);