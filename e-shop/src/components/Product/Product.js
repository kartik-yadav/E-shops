import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context/Context";
import "./Product.scss";

class Product extends React.Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="product-container">
        <ProductConsumer>
          {(value) => {
            return (
              <div
                className="product-image-wrapper"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/Description">
                  <img src={img} alt="" className="product-image" />
                </Link>
                <button
                  className="product-button"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                  }}
                >
                  {inCart ? <p disabled>In cart</p> : <p>Add To Cart</p>}
                </button>
              </div>
            );
          }}
        </ProductConsumer>
        <div className="product-content">
          <h4 className="product-title">{title}</h4>
          <h5 className="product-price">${price}</h5>
        </div>
      </div>
    );
  }
}

export default Product;
