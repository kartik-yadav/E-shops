import React from "react";
import { ProductConsumer } from "../../components/Context/Context";
import { Link } from "react-router-dom";
import "./Description.scss";

class Description extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, info, price, title, inCart } = value.detailProduct;

          return (
            <div className="description-container">
              <div className="description-content">
                <div className="description-image-wrapper">
                  <img src={img} className="description-image" alt="Product" />
                </div>
                <div className="description-content-wrapper">
                  <h2 className="description-title">{title}</h2>
                  <h3 className="description-price">${price}</h3>
                  <p className="description-p">{info}</p>
                  <Link to="/">
                    <button className="btn-light">Back To Products</button>
                  </Link>
                  <button
                    className="btn-dark"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "In Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>
              <div className="description-reviews">
                <h3>Reviews</h3>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Description;
