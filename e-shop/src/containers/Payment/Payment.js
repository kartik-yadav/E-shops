import React from "react";
import "./Payment.scss";
import { Link } from "react-router-dom";
import Summary from "../../components/Summary/Summary";
import logo from "../../assests/images/paypal.png";
import { ProductConsumer } from "../../components/Context/Context";

class Payment extends React.Component {
  state = {
    checked: false,
  };
  handleCc = () => {
    this.setState({ checked: true });
  };
  handlePp = () => {
    this.setState({ checked: false });
  };

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
        <div className="payment-wrapper">
          <div className="payment-content">
            <h3 className="payment-h3">Payment Method</h3>
            <div className="payment-cc">
              <div className="payment-cc-heading">
                <input
                  type="radio"
                  id="cc"
                  name="pmethod"
                  className="payment-cc-toggler"
                  onClick={this.handleCc}
                />
                <div>
                  <h4 className="payment-cc-h4">Credit Card</h4>
                  <p className="payment-cc-p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit Sit
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit Sit
                    id
                  </p>
                </div>
              </div>
              {this.state.checked ? (
                <div>
                  <div className="payment-input-wrapper">
                    <input
                      type="text"
                      id="cno"
                      placeholder="0000 0000 0000 0000"
                      className="payment-input"
                      required
                    />
                    <input
                      type="text"
                      id="cdate"
                      placeholder="MM / YY"
                      className="payment-input"
                      required
                    />
                    <input
                      type="number"
                      id="cvv"
                      placeholder="CVV"
                      className="payment-input"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    id="chn"
                    placeholder="Card Holder Name"
                    className="payment-input payment-full"
                    required
                  />
                </div>
              ) : null}
            </div>
            <div className="payment-pp-wrapper">
              <div className="payment-pp">
                <input
                  type="radio"
                  id="pp"
                  name="pmethod"
                  className="payment-pp-toggler"
                  onClick={this.handlePp}
                />
                <div className="payment-pp-content">
                  <h4 className="payment-pp-h4">Paypal</h4>
                  <p className="payment-pp-p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit Sit
                    id Lorem ipsum dolor sit amet consectetur, adipisicing elit
                    Sit id
                  </p>
                </div>
                <div className="paypal-logo-wrapper">
                  <img src={logo} className="paypal-logo" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="payment-summary">
            <Summary />
          </div>
        </div>
        <ProductConsumer>
          {(value) => {
            return (
              <div className="payment-lower">
                <Link to="/Confirmed">
                  <button
                    className="btn-dark"
                    onClick={() => value.displaySubmit()}
                  >
                    Pay Now
                  </button>
                </Link>
                <Link to="/Shipping">
                  <button className="btn-light">Cancel</button>
                </Link>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
export default Payment;
