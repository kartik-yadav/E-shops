import React from "react";
import "./Cart.scss";
import CartList from "../../components/CartList/CartList";
import CartTotal from "../../components/CartTotal/CartTotal";
import { ProductConsumer } from "../../components/Context/Context";
import CartEmpty from "../../components/CartEmpty/CartEmpty";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div>
                  <div className="progress-container">
                    <ul className="progress-content">
                      <li className="progress-list progress-active">
                        1. Shopping Cart
                      </li>
                      <li className="progress-list">2. Shipping Details</li>
                      <li className="progress-list">3. Payment Options</li>
                    </ul>
                  </div>
                  <div>
                    <div>
                      <CartList value={value} />
                    </div>
                    <div>
                      <CartTotal value={value} />
                    </div>
                  </div>
                  <div>
                    <Link to="/Shipping">
                      <button>Next</button>
                    </Link>
                    <Link to="/">
                      <button>Cancel</button>
                    </Link>
                  </div>
                </div>
              );
            } else {
              return <CartEmpty />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
export default Cart;
