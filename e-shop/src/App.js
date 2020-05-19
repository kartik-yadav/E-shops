import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Cart from "./containers/Cart/Cart";
import Description from "./containers/Description/Description";
import Shipping from "./containers/Shipping/Shipping";
import Payment from "./containers/Payment/Payment";
import Confirmed from "./containers/Confirmed/Confirmed";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Description" component={Description} />
        <Route path="/Shipping" component={Shipping} />
        <Route path="/Payment" component={Payment} />
        <Route path="/Confirmed" component={Confirmed} />

        <Footer />
      </div>
    );
  }
}

export default App;
