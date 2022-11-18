import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
<<<<<<< HEAD
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
=======
// import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 748437aea0ac10e46584867b2da38712271a98f8

import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
<<<<<<< HEAD
);
=======
);
>>>>>>> 748437aea0ac10e46584867b2da38712271a98f8
