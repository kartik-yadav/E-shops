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
      <div className="carttotal-container">
        {!emptyCart && (
          <div>
            <h2 className="carttotal-h2">Summary</h2>
            <h3 className="carttotal-h3">ENTER COUPON CODE</h3>
            <div className="carttotal-middle">
              <h5 className="carttotal-h5">
                <span>SUBTOTAL</span>
                <span>${cartSubTotal}</span>
              </h5>
              <h5 className="carttotal-h5">
                <span>SHIPPING</span>
                <span>FREE</span>
              </h5>
              <h5 className="carttotal-h5">
                <span>TAXES</span>
                <span>${cartTax}</span>
              </h5>
            </div>
            <h4 className="carttotal-h4">
              <span>TOTAL</span>
              <span>${cartTotal}</span>
            </h4>
            <div className="">
              <Link to="/">
                <button
                  className="btn-dark"
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
