import React from "react";
import "./Summary.scss";
import SummaryList from "../SummaryList/SummaryList";
import SummaryTotal from "../SummaryTotal/SummaryTotal";
import { ProductConsumer } from "../Context/Context";
import SummaryEmpty from "../SummaryEmpty/SummaryEmpty";

class Summary extends React.Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div>
                  <h3>Summary</h3>
                  <div>
                    <SummaryList value={value} />
                  </div>
                  <p>
                    <span>HAVE A VOUCHER?</span>
                    <i className="fas fa-sort-down"></i>
                  </p>
                  <div>
                    <SummaryTotal value={value} />
                  </div>
                </div>
              );
            } else {
              return <SummaryEmpty />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
export default Summary;
