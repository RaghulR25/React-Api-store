import React, { useState, useEffect } from "react";

const Product = ({ addToCart }) => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div className="container">
      {allData.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h5>{item.title.length > 12 ? item.title.substring(0, 12) + "..." : item.title}</h5>
          <div className="price">₹{item.price}</div>
          <button className="btn" onClick={() => addToCart(item)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
