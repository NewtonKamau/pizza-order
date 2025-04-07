import { useState } from "react";
import Pizza from "./Pizza";
export default function Order() {
  const [pizzaType, setPizzaType] = useState('Pepperoni')
  const [pizzaSize, setPizzaSize] = useState('m');
  return (
    <div className="order">
      <h2>Create Order </h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              id="pizza-type"
              name="pizza-type"
              value={pizzaType}
              onChange={(e) => setPizzaType(e.target.value)}
            >
              <option value="Margherita">Margherita</option>
              <option value="Pepperoni">Pepperoni</option>
              <option value="Hawaiian">Hawaiian</option>
            </select>
            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              <div>
                <span>
                  <input
                    type="radio"
                    id="small"
                    name="pizza-size"
                    value="S"
                    onChange={(e) => setPizzaType(e.target.value)}
                    checked={pizzaSize === "S"}
                  />
                  <label htmlFor="small">Small</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="medium"
                    name="pizza-size"
                    value="M"
                    onChange={(e) => setPizzaType(e.target.value)}
                    checked={pizzaSize === "M"}
                  />
                  <label htmlFor="medium">Medium</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="large"
                    name="pizza-size"
                    value="L"
                    onChange={(e) => setPizzaType(e.target.value)}
                    checked={pizzaSize === "L"}
                  />
                  <label htmlFor="large">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to cart</button>
            <div className="order-pizza">
              <Pizza
                name="Pepperoni"
                description="Tomato, mozzarella, pepperoni"
                image="/public/pizzas/pepperoni.webp"
              />
              <p>$13.21</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
