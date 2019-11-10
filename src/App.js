import React from "react";
import './App.css';
import DataDog from "./components/Datadog";
import Azure from "./components/Azure";

import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <div>
        <Azure />
        <DataDog />
      </div>
    </Provider>
  );
}

export default App;
