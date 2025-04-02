import React from "react";
import { createRoot } from "react-dom/client";

import Pizza from "./Pizza";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "Tomato, mozzarella, basil",
      image:"/public/pizzas/pepperoni.webp",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "Tomato, mozzarella, pepperoni",
      image:"/public/pizzas/hawaiian.webp",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "Tomato, mozzarella, ham, pineapple",
    }),
    React.createElement(Pizza, {
      name: "Vegetarian",
      description: "Tomato, mozzarella, vegetables",
      image:  "/public/pizzas/big_meat.webp"
    }),
   
  ]);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
