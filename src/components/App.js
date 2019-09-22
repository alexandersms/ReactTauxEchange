import React, { Component } from "react";
import SearchBar from "../containers/search-bar";
import RateExchangeList from "../containers/rate-exchange-list";
import "../style/style.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <RateExchangeList />
      </div>
    );
  }
}

export default App;
