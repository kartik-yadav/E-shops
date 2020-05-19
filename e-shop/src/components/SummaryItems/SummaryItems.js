import React from "react";
import "./SummaryItems.scss";

class SummaryItems extends React.Component {
  render() {
    const { title, img, price } = this.props.item;

    return (
      <div className="">
        <div className="">
          <img src={img} alt="product" />
        </div>
        <div>
          <h3>{title}</h3>
          <h4>${price}</h4>
        </div>
      </div>
    );
  }
}

export default SummaryItems;
