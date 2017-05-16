import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "./reducers/reducers";
import AsyncApp from "./containers/AsyncApp";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const Mount = () => (
  <Provider store={store}>
    <AsyncApp />
  </Provider>
);

export default Mount;
