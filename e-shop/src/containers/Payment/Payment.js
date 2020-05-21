import React from "react";
import "./Payment.scss";
import { Link } from "react-router-dom";
import Summary from "../../components/Summary/Summary";

class Payment extends React.Component {
  render() {
    return (
      <div className="payment-container">
        <div className="progress-container">
          <ul className="progress-content">
            <li className="progress-list">
              <Link to="/Cart" className="progress-a">
                1. Shopping Cart
              </Link>
            </li>
            <li className="progress-list">
              <Link to="/Shipping" className="progress-a">
                2. Shipping Details
              </Link>
            </li>
            <li className="progress-list progress-active">
              3. Payment Options
            </li>
          </ul>
        </div>
        <div className="payment-content">
          <h3>Payment Method</h3>
          <div>
            <div>
              <div>
                <input type="radio" id="cc" name="pmethod" />
              </div>
              <div>
                <h4>Credit Card</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit Sit
                  id
                </p>
              </div>
              <form>
                <input type="text" id="cno" placeholder="0000 0000 0000 0000" />
                <input type="text" id="cdate" placeholder="MM / YY" />
                <input type="text" id="ccw" placeholder="CW" />
                <input type="text" id="chn" placeholder="Card Holder Name" />
              </form>
            </div>
            <div>
              <div>
                <input type="radio" id="pp" name="pmethod" />
              </div>
              <div>
                <h4>Paypal</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit Sit
                  id Lorem ipsum dolor sit amet consectetur, adipisicing elit
                  Sit id
                </p>
              </div>
              <div>{/* Paypal Image */}</div>
            </div>
          </div>
        </div>
        <div>
          <Summary />
        </div>
        <div>
          <Link to="/Confirmed">
            <button className="btn-dark">Pay Now</button>
          </Link>
          <Link to="/Shipping">
            <button className="btn-light">Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Payment;
