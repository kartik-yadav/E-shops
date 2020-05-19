import React from "react";
import { ProductConsumer } from "../../components/Context/Context";
import { Link } from "react-router-dom";

class Description extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, info, price, title, inCart } = value.detailProduct;

          return (
            <div className="">
              <div className="">
                <div className="description-image-wrapper">
                  <img src={img} className="" alt="Product" />
                </div>
                <div className="">
                  <h2>{title}</h2>
                  <h3>${price}</h3>
                  <p className="">{info}</p>
                  <Link to="/">
                    <button>Back To Products</button>
                  </Link>
                  <button
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
              <div className="">
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
