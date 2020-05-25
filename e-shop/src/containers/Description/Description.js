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
                  <img
                    src={img}
                    className="description-image"
                    alt="Product"
                    id="cimg"
                  />
                </div>
                <div className="description-content-wrapper">
                  <h2 className="description-title">{title}</h2>
                  <h3 className="description-price">
                    <span>${price}</span>{" "}
                    <input
                      list="model"
                      id="mdl"
                      placeholder="ENTER MODEL"
                      onKeyUp={() => {
                        value.changeModel();
                      }}
                    />
                    <datalist id="model">
                      <option value="Black" />
                      <option value="White" />
                    </datalist>
                  </h3>
                  <p className="description-p">{info}</p>
                  <Link to="/">
                    <button className="btn-light">Back To Products</button>
                  </Link>
                  <button
                    className="btn-dark"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? "In Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>
              <div className="description-reviews">
                <h3 className="description-reviews-h3">Reviews</h3>
                <div className="description-reviews-content-wrapper">
                  <div className="description-reviews-content">
                    <span className="description-reviews-icon">
                      <i class="fas fa-user fa-2x"></i>
                    </span>
                    <div className="description-reviews-name">
                      <h4 className="description-reviews-h4">JOHN DOE</h4>
                      <p className="description-reviews-middle-p">
                        august 14, 2018
                      </p>
                      <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </span>
                    </div>
                    <p className="description-reviews-p">{info}</p>
                  </div>
                  <div className="description-reviews-content">
                    <span className="description-reviews-icon">
                      <i class="fas fa-user fa-2x"></i>
                    </span>
                    <div className="description-reviews-name">
                      <h4 className="description-reviews-h4">JOHN DOE</h4>
                      <p className="description-reviews-middle-p">
                        august 14, 2018
                      </p>
                      <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </span>
                    </div>
                    <p className="description-reviews-p">{info}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Description;
