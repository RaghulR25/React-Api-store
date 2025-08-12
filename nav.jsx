import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar({ cartCount }) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="nav">
      <h1 style={{ cursor: "pointer" }} onClick={handleLogoClick}>
        My Shopping
      </h1>
      <button className="cart-button" onClick={handleCartClick}>
        <FaCartPlus style={{ marginRight: "6px" }} />
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;
