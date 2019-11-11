import React, { Component } from "react";
import "./App.css";
import DataDog from "./components/Datadog";
import Azure from "./components/Azure";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Azure />
          <DataDog />
        </div>
      </Provider>
    );
  }
}

export default App;
