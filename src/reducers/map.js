import * as actionTypes from "../actions/constants/ActionTypes";

const map = (
  state = {
    center: { lat: 39.50, lng: -98.35 },
    defaultZoom: 4,
    zoom: 4,
    bounds: { se: { lat: 40, lng: -80 }, nw: { lat: 41, lng: -81 } },
  },
  action
) => {
  switch (action.type) {
    case actionTypes.UPDATE_MAP:
      return {
        zoom: action.zoom,
        center: action.center,
        bounds: action.bounds,
      };
    default:
      return state;
  }
};

export default map;
