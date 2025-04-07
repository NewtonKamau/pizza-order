import { useEffect,useState } from "react";
import Pizza from "./Pizza";
  const intl = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "KSH",
  });
export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState('Pepperoni')
  const [pizzaSize, setPizzaSize] = useState('m');
  const [loading, setLoading] = useState(true);
  
  let price, selectedPizza;
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza)=>pizzaType === pizza.id)
  }
  async function fetchPizzaTypes(){
    const pizzaRes = await fetch("/api/pizzas")
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson)
    setLoading(false)
  }
  useEffect(() => {
    fetchPizzaTypes();
  },[])

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
             
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
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
                    onChange={(e) => setPizzaSize(e.target.value)}
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
                    onChange={(e) => setPizzaSize(e.target.value)}
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
                    onChange={(e) => setPizzaSize(e.target.value)}
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
