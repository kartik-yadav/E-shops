import React from "react";
import "./CartTotal.scss";
import { Link } from "react-router-dom";

class CartTotal extends React.Component {
  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart,
    } = this.props.value;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <div className="">
        {!emptyCart && (
          <div className="">
            <h2>Summary</h2>
            <h3>ENTER COUPON CODE</h3>
            <div className="">
              <h5 className="">
                <span>SUBTOTAL</span>
                <span>${cartSubTotal}</span>
              </h5>
              <h5 className="">
                <span>SHIPPING</span>
                <span>FREE</span>
              </h5>
              <h5 className="">
                <span>TAXES</span>
                <span>${cartTax}</span>
              </h5>
            </div>
            <h4>
              <span>TOTAL</span>
              <span>${cartTotal}</span>
            </h4>
            <div className="">
              <Link to="/">
                <button
                  className=""
                  type="button"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  Clear Cart
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CartTotal;
