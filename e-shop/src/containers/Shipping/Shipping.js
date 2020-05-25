import React from "react";
import "./Shipping.scss";
import { Link } from "react-router-dom";
import Summary from "../../components/Summary/Summary";
import { ProductConsumer } from "../../components/Context/Context";

class Shipping extends React.Component {
  handleForward = (event) => {
    event.preventDefault();
    this.props.history.push("/payment");
  };

  render() {
    return (
      <div className="shipping-container">
        <div className="progress-container">
          <ul className="progress-content">
            <li className="progress-list">
              <Link to="/Cart" className="progress-a">
                1. Shopping Cart
              </Link>
            </li>
            <li className="progress-list progress-active">
              2. Shipping Details
            </li>
            <li className="progress-list">
              <Link to="/Payment" className="progress-a">
                3. Payment Options
              </Link>
            </li>
          </ul>
        </div>
        <div className="shipping-content">
          <div className="shipping-left">
            <h3 className="shipping-h3">Shipping Details</h3>
            <ProductConsumer>
              {(value) => {
                return (
                  <form
                    className="shipping-form"
                    id="my-form"
                    onSubmit={(event) => {
                      value.handleSubmit(event);
                      this.handleForward(event);
                    }}
                  >
                    <div className="shipping-form-container">
                      <input
                        type="text"
                        id="fname"
                        placeholder="First Name*"
                        required
                      />
                      <input
                        type="text"
                        id="lname"
                        placeholder="Last Name*"
                        required
                      />
                    </div>
                    <div className="shipping-form-address">
                      <input
                        type="text"
                        id="add"
                        placeholder="Address*"
                        required
                      />
                      <input type="text" id="adds" placeholder="Address2" />
                    </div>
                    <div className="shipping-form-container">
                      <input
                        list="country"
                        id="ctry"
                        placeholder="Country*"
                        required
                      />
                      <datalist id="country">
                        <option value="India" />
                        <option value="Israel" />
                        <option value="Canada" />
                        <option value="Iran" />
                        <option value="Italy" />
                      </datalist>
                      <input
                        type="text"
                        id="city"
                        placeholder="City*"
                        required
                      />
                    </div>
                    <div className="shipping-form-container">
                      <input
                        type="number"
                        id="zip"
                        placeholder="Zip/Postal Code*"
                        required
                      />
                      <input
                        type="number"
                        id="pno"
                        placeholder="Phone Number*"
                        required
                      />
                    </div>
                    <div className="shipping-charges">
                      <div className="shipping-charges-content">
                        <input
                          type="radio"
                          id="fs"
                          name="delievery"
                          className="shipping-toggler"
                          onClick={() => {
                            value.addShippingFree();
                          }}
                        />
                        <div className="shipping-charges-description">
                          <p>Free Shipping</p>
                          <p>Between 2-5 working days</p>
                        </div>
                      </div>
                      <div className="shipping-charges-content">
                        <input
                          type="radio"
                          id="ndd"
                          name="delievery"
                          className="shipping-toggler"
                          onClick={() => {
                            value.addShippingPaid();
                          }}
                        />
                        <div className="shipping-charges-description">
                          <p>Next Day Delievery - $20</p>
                          <p>24 hours from checkout</p>
                        </div>
                      </div>
                    </div>
                  </form>
                );
              }}
            </ProductConsumer>
          </div>
          <div className="shipping-right">
            <Summary />
          </div>
        </div>
        <div className="shipping-lower">
          <button type="submit" form="my-form" className="btn-dark">
            Next
          </button>
          <Link to="/Cart">
            <button className="btn-light">Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Shipping;
