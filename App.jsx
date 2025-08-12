import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/product";
import Navbar from "./components/nav";
import Cart from "./components/cark";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCartItems((prev) => [...prev, product]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Product addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
