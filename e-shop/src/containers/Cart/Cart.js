import React from "react";
import "./Cart.scss";
import CartList from "../../components/CartList/CartList";
import CartTotal from "../../components/CartTotal/CartTotal";
import { ProductConsumer } from "../../components/Context/Context";
import CartEmpty from "../../components/CartEmpty/CartEmpty";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart-wrapper">
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div>
                  <div className="progress-container">
                    <ul className="progress-content">
                      <li className="progress-list progress-active">
                        1. Shopping Cart
                      </li>
                      <li className="progress-list">
                        <Link to="/Shipping" className="progress-a">
                          2. Shipping Details
                        </Link>
                      </li>
                      <li className="progress-list">3. Payment Options</li>
                    </ul>
                  </div>
                  <div className="cart-container">
                    <div className="cart-content">
                      <div className="cart-content-left">
                        <h2 className="cart-h2">Shopping Cart</h2>
                        <CartList value={value} />
                      </div>
                      <div className="cart-content-right">
                        <CartTotal value={value} />
                      </div>
                    </div>
                    <div className="cart-lower">
                      <Link to="/Shipping">
                        <button className="btn-dark">Next</button>
                      </Link>
                      <Link to="/">
                        <button className="btn-light">Cancel</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            } else {
              return <CartEmpty />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
export default Cart;
