import React from "react";
import "./CartItems.scss";

class CartItems extends React.Component {
  state = {
    checked: true,
  };
  handleQty = () => {
    const { count } = this.props.item;
    if (count > 9) {
      this.setState({ checked: false });
    } else {
      this.setState({ checked: true });
    }
  };

  render() {
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;
    return (
      <div className="carditems-container">
        <div className="carditems-img-wrapper">
          <img src={img} alt="product" className="carditems-img" />
        </div>

        <div className="carditems-content">
          <div className="carditems-heading">
            <h3 className="carditems-h3">{title}</h3>
            <span className="carditems-del" onClick={() => removeItem(id)}>
              <i className="fas fa-trash" />
            </span>
          </div>
          <div className="carditems-align">
            <div>
              <p className="carditems-p">Lorem ipsum dolor amet offal</p>
              <h4 className="carditems-h4">${price}</h4>
            </div>
            <div className="carditems-qty">
              <span className="carditems-pcs">{count}pcs</span>
              <div className="carditems-toggle">
                <span className="carditems-up">
                  {this.state.checked ? (
                    <i
                      className="fas fa-sort-up"
                      onClick={() => {
                        increment(id);
                        this.handleQty();
                      }}
                    ></i>
                  ) : null}
                </span>
                <span
                  className="carditems-down"
                  onClick={() => {
                    decrement(id);
                    this.handleQty();
                  }}
                >
                  <i className="fas fa-sort-down special-down"></i>
                </span>
              </div>
            </div>
          </div>
          <h5 className="carditems-h5">Item Total : ${total}</h5>
        </div>
      </div>
    );
  }
}

export default CartItems;
