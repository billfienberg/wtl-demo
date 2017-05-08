import React from "react";
import ReactDOM, { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import eventsApp from "./reducers/index";
import Mount from "./Mount";

it("renders without crashing", () => {
  const store = createStore(eventsApp);
  const div = document.createElement("div");
  ReactDOM.render(<Mount />, div);
});
