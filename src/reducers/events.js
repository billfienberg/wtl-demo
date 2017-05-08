import * as actionTypes from "../actions/constants/ActionTypes";

const event = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_EVENT:
      return {
        id: action.id,
      };
    default:
      return state;
  }
};

const events = (state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_EVENT:
      return [...state, event(undefined, action)];
    case actionTypes.FETCH_EVENTS_REQUEST:
      return { ...state, isFetching: true };
    case actionTypes.FETCH_EVENTS_SUCCESS:
      return { ...state, isFetching: false, items: action.events };
    case actionTypes.FETCH_EVENTS_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

export default events;
