import React from "react";
import "./SummaryTotal.scss";

class SummaryTotal extends React.Component {
  render() {
    const { cartSubTotal, cartTax, cartTotal, cart } = this.props.value;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <div className="">
        {!emptyCart && (
          <div className="">
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
          </div>
        )}
      </div>
    );
  }
}

export default SummaryTotal;
