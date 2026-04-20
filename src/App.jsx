import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);

  const onToggle = () => {
    setDarkMode((prev) => !prev);
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const [category, setCategory] = useState("all");

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      <DarkModeToggle onToggle={onToggle} darkMode={darkMode} />

      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList addToCart={addToCart} selectedCategory={category} />

      <Cart cart={cart} />
    </div>
  );
};

export default App;
