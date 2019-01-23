import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import {store} from './store/index';
import { withdrawMoney } from './actions'
;
class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={withdrawCash}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={withdrawCash}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

function withdrawCash(e) {
  const amount = e.target.dataset.amount;
  console.log(amount)
  store.dispatch(withdrawMoney(amount));
}

export default App;
