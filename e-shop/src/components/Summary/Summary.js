import React from "react";
import "./Summary.scss";
import SummaryList from "../SummaryList/SummaryList";
import SummaryTotal from "../SummaryTotal/SummaryTotal";
import { ProductConsumer } from "../Context/Context";
import SummaryEmpty from "../SummaryEmpty/SummaryEmpty";

class Summary extends React.Component {
  render() {
    return (
      <div className="summary-container">
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div>
                  <h3 className="summary-h3">Summary</h3>
                  <div className="summary-content">
                    <SummaryList value={value} />
                  </div>
                  <input
                    list="voucher"
                    id="vchr"
                    placeholder="HAVE A VOUCHER?"
                    onKeyUp={() => {
                      value.addDiscount();
                    }}
                  />
                  <datalist id="voucher">
                    <option value="OFF10" />
                    <option value="OFF20" />
                    <option value="OFF50" />
                    <option value="OFF100" />
                  </datalist>
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
