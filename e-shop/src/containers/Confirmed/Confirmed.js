import React from "react";
import "./Confirmed.scss";
import { Link } from "react-router-dom";

class Confirmed extends React.Component {
  render() {
    return (
      <div className="confirmed-container">
        <div className="confirmed-content">
          <h2>Your Order has been placed</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            doloribus at, facere ipsam laboriosam hic.
          </p>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Confirmed;
