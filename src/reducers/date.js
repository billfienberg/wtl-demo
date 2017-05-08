import * as actionTypes from "../actions/constants/ActionTypes";

const date = (state = new Date().toJSON().slice(5, 10), action) => {
  switch (action.type) {
    case actionTypes.SET_DATE:
      return action.date;
    default:
      return state;
  }
};

export default date;
