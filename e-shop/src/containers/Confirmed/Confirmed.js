import React from "react";
import "./Confirmed.scss";
import { Link } from "react-router-dom";

class Confirmed extends React.Component {
  render() {
    return (
      <div className="confirmed-container">
        <div className="confirmed-wrapper">
          <div className="confirmed-content">
            <h2 className="confirmed-h2">Your Order has been placed</h2>
            <p className="confirmed-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              doloribus at, facere ipsam laboriosam hic.
            </p>
            <Link to="/" className="">
              <button className="btn-dark confirmed-btn">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Confirmed;
