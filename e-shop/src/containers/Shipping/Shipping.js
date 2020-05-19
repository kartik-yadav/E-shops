import React from "react";
import "./Shipping.scss";
import { Link } from "react-router-dom";
import Summary from "../../components/Summary/Summary";

class Shipping extends React.Component {
  render() {
    return (
      <div className="shipping-container">
        <div className="progress-container">
          <ul className="progress-content">
            <li className="progress-list">1. Shopping Cart</li>
            <li className="progress-list progress-active">
              2. Shipping Details
            </li>
            <li className="progress-list">3. Payment Options</li>
          </ul>
        </div>
        <div className="shipping-content">
          <h3>Shipping Details</h3>
          <form>
            <input type="text" id="fname" placeholder="First Name" />
            <input type="text" id="lname" placeholder="Last Name" />
            <input type="text" id="add" placeholder="Address" />
            <input type="text" id="adds" placeholder="Address2" />
            <input list="country" id="ctry" placeholder="Country" />
            <datalist id="country">
              <option value="India" />
              <option value="Israel" />
              <option value="Canada" />
              <option value="Iran" />
              <option value="Italy" />
            </datalist>
            <input type="text" id="city" placeholder="City" />
            <input type="text" id="zip" placeholder="Zip/Postal Code" />
            <input type="text" id="pno" placeholder="Phone Number" />
            <div>
              <div>
                <input type="radio" id="fs" name="delievery" checked />
              </div>
              <div>
                <p>Free Shipping</p>
                <p>Between 2-5 working days</p>
              </div>
            </div>
            <div>
              <div>
                <input type="radio" id="ndd" name="delievery" />
              </div>
              <div>
                <p>Next Day Delievery - $20</p>
                <p>24 hours from checkout</p>
              </div>
            </div>
          </form>
        </div>
        <div>
          <Summary />
        </div>
        <div>
          <Link to="/Payment">
            <button>Next</button>
          </Link>
          <Link to="/Cart">
            <button>Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Shipping;
