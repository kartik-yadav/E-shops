import React, { Component } from "react";
import { storeProducts, detailProduct } from "../Data/Data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    formData: {
      firstName: "",
      lastName: "",
      address: "",
      addressSecond: "",
      country: "",
      city: "",
      zipCode: "",
      pNo: "",
    },
    discount: 0,
    shipping: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    }, this.checkCartItems);
  };

  handleChange = () => {
    let inputValue = document.getElementById("search-bar").value.toLowerCase();
    let products = [];
    storeProducts.forEach((item) => {
      const singleItems = { ...item };
      if (singleItems.title.toLowerCase().includes(inputValue)) {
        products = [...products, singleItems];
      }
    });
    this.setState(() => {
      return { products };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      firstName: "",
      lastName: "",
      address: "",
      addressSecond: "",
      country: "",
      city: "",
      zipCode: "",
      pNo: "",
    };
    formData.firstName = document.getElementById("fname").value;
    formData.lastName = document.getElementById("lname").value;
    formData.address = document.getElementById("add").value;
    formData.addressSecond = document.getElementById("adds").value;
    formData.country = document.getElementById("ctry").value;
    formData.city = document.getElementById("city").value;
    formData.zipCode = document.getElementById("zip").value;
    formData.pNo = document.getElementById("pno").value;

    this.setState(() => {
      return {
        formData: formData,
      };
    });
  };

  displaySubmit = () => {
    console.log(this.state.formData);
  };

  changeModel = () => {
    console.log("hello");
    const { img, imgs } = this.state.detailProduct;
    let modelText = document.getElementById("mdl").value.toLowerCase();
    if (modelText.includes("white")) {
      document.getElementById("cimg").src = imgs;
    } else {
      document.getElementById("cimg").src = img;
    }
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product],
        detailProduct: { ...product },
      };
    }, this.addTotals);
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart],
      };
    }, this.addTotals);
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotals);
    }
  };

  addShippingFree = () => {
    let shipping = 0;

    this.setState(() => {
      return {
        shipping: shipping,
      };
    }, this.addTotals);
  };

  addShippingPaid = () => {
    let shipping = 20;

    this.setState(() => {
      return {
        shipping: shipping,
      };
    }, this.addTotals);
  };

  addDiscount = () => {
    let discount = 0;
    let value = document.getElementById("vchr").value;
    if (value.includes(100)) {
      discount = 100;
    } else if (value.includes(50)) {
      discount = 50;
    } else if (value.includes(20)) {
      discount = 20;
    } else if (value.includes(10)) {
      discount = 10;
    } else {
      discount = 0;
    }

    this.setState(() => {
      return {
        discount: discount,
      };
    }, this.addTotals);
  };

  getTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const discount = this.state.discount;
    const shipping = this.state.shipping;
    const total = subTotal + tax - discount + shipping;
    return {
      subTotal,
      tax,
      total,
    };
  };

  addTotals = () => {
    const totals = this.getTotals();
    this.setState(() => {
      return {
        cartSubTotal: totals.subTotal,
        cartTax: totals.tax,
        cartTotal: totals.total,
      };
    });
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter((item) => {
      return item.id !== id;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts],
      };
    }, this.addTotals);
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          changeModel: this.changeModel,
          displaySubmit: this.displaySubmit,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          addDiscount: this.addDiscount,
          addShippingFree: this.addShippingFree,
          addShippingPaid: this.addShippingPaid,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
