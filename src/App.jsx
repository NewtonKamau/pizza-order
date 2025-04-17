import {useState, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import Header from "./Header";
import { CartContext } from "./contexts";
import { PizzaOfTheDay } from "./PizzaOfTheDay";

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
          <footer>
            <p>
              Made with ❤️ by{" "}
              <a href="https://github.com/newtonkamau">Newton</a>
            </p>
          </footer>
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
