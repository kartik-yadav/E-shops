import React from "react";
import "./SummaryTotal.scss";

class SummaryTotal extends React.Component {
  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      discount,
      shipping,
    } = this.props.value;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <div className="summarytotal-container">
        {!emptyCart && (
          <div>
            <div className="summarytotal-content">
              <h5 className="summarytotal-h5">
                <span>SUBTOTAL</span>
                <span>${cartSubTotal}</span>
              </h5>
              <h5 className="summarytotal-h5">
                <span>SHIPPING</span>
                <span>${shipping}</span>
              </h5>
              <h5 className="summarytotal-h5">
                <span>TAXES</span>
                <span>${cartTax}</span>
              </h5>
              <h5 className="summarytotal-h5">
                <span>DISCOUNT</span>
                <span>${discount}</span>
              </h5>
            </div>
            <h4 className="summarytotal-h4">
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
