import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleWare from "redux-thunk";
import reducers from "./rootreducer";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
