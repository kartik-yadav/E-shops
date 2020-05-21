import React from "react";
import "./SummaryItems.scss";

class SummaryItems extends React.Component {
  render() {
    const { title, img, price } = this.props.item;

    return (
      <div className="summaryitems-container">
        <div className="summaryitems-img-wrapper">
          <img src={img} alt="product" className="summaryitems-img" />
        </div>
        <div className="summaryitems-content">
          <h3 className="summaryitems-h3">{title}</h3>
          <h4 className="summaryitems-h4">${price}</h4>
        </div>
      </div>
    );
  }
}

export default SummaryItems;
