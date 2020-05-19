import React from "react";
import "./Home.scss";
import Product from "../../components/Product/Product";
import { ProductConsumer } from "../../components/Context/Context";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-search">
          <input
            type="text"
            id="home-search-bar"
            // onKeyUp={this.filter}
            placeholder="Search..."
          />
        </div>
        <div className="pdtlst">
          <h2 className="pdtlst-h2">Product Listing</h2>
          <p className="pdtlst-p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            doloribus at, facere ipsam laboriosam hic.
          </p>
          <div className="pdtlst-content">
            <ProductConsumer>
              {(value) => {
                console.log(value);
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
