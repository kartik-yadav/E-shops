import React from "react";
import CartItems from "../CartItems/CartItems";
import "./CartList.scss";

class CartList extends React.Component {
  render() {
    const { value } = this.props;
    const { cart } = this.props.value;
    return (
      <div className=".cartlist-container">
        {cart.map((item) => (
          <CartItems key={item.id} item={item} value={value} />
        ))}
      </div>
    );
  }
}

export default CartList;
