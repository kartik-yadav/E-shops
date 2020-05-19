import React from "react";
import "./CartEmpty.scss";

const CartEmpty = () => {
  return (
    <div className="cartempty-container">
      <div className="cartempty-content">
        <h2>Your cart is currently empty</h2>
      </div>
    </div>
  );
};

export default CartEmpty;
