import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-page-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>ID: {item.id}</p>
              <p>Price: ₹{item.price}</p>
              <button className="btn" onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
