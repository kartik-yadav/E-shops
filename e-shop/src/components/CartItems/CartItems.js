import React from "react";
import "./CartItems.scss";

class CartItems extends React.Component {
  render() {
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

    return (
      <div className="">
        <div className="">
          <img src={img} alt="product" />
        </div>
        <div>
          <h3>{title}</h3>
          <span className="" onClick={() => removeItem(id)}>
            <i className="fas fa-trash" />
          </span>
        </div>
        <div>
          <p>Lorem ipsum dolor amet offal butcher quinoa</p>
          <h4>${price}</h4>
        </div>
        <div>
          <span>{count}pcs</span>
          <div>
            <span
              className=""
              onClick={() => {
                return increment(id);
              }}
            >
              <i className="fas fa-sort-up"></i>
            </span>
            <span
              className=""
              onClick={() => {
                return decrement(id);
              }}
            >
              <i className="fas fa-sort-down"></i>
            </span>
          </div>
        </div>
        <h5>item total : ${total}</h5>
      </div>
    );
  }
}

export default CartItems;
