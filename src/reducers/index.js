import { combineReducers } from "redux";
import events from "./events";
import date from "./date";
import map from "./map";

const rootReducer = combineReducers({
  events,
  date,
  map,
});

export default rootReducer;
