import React from "react";
import SummaryItems from "../SummaryItems/SummaryItems";
import "./SummaryList.scss";

class SummaryList extends React.Component {
  render() {
    // const { value } = this.props;
    const { cart } = this.props.value;
    console.log(cart);
    return (
      <div className=".summarylist-container">
        {cart.map((item) => (
          <SummaryItems key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default SummaryList;
