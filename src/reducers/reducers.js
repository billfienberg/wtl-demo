import { combineReducers } from "redux";
import * as actionTypes from "../actions/constants/ActionTypes";

const initialStateForMapSettingsReducer = {
  center: { lat: 39.5, lng: -98.35 },
  defaultZoom: 4,
  zoom: 4,
  bounds: { se: { lat: 40, lng: -80 }, nw: { lat: 41, lng: -81 } },
};

export function mapSettings(state = initialStateForMapSettingsReducer, action) {
  switch (action.type) {
    case actionTypes.ADJUST_MAP:
      return Object.assign({}, state, {
        center: action.center,
        defaultZoom: action.defaultZoom,
        zoom: action.zoom,
        bounds: action.bounds,
      });
    default:
      return state;
  }
}

const initialStateForSelectedDateReducer = new Date().toJSON().slice(0, 10);

export function selectedDate(
  state = initialStateForSelectedDateReducer,
  action
) {
  switch (action.type) {
    case actionTypes.SELECT_DATE:
      return action.selectedDate;
    default:
      return state;
  }
}

const initialStateForEventsReducer = {
  isFetching: false,
  items: [],
};

export function events(state = initialStateForEventsReducer, action) {
  switch (action.type) {
    case actionTypes.FETCH_EVENTS_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case actionTypes.FETCH_EVENTS_SUCCESS:
      const items = action.items;
      return Object.assign({}, state, { isFetching: false, items });
    case actionTypes.FETCH_EVENTS_FAILURE:
      const ex = action.ex;
      return Object.assign({}, state, { isFetching: false, ex });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  events,
  mapSettings,
  selectedDate,
});

export default rootReducer;
