import * as types from "./constants/ActionTypes";

// This isn't really an action, and feels like more of a policy
export function shouldFetchEvents(state) {
  const events = state.events;
  if (events.isFetching) {
    return false;
  } else if (events.items.length === 0) {
    return true;
  } else {
    // When in doubt, don't fetch events
    return false;
  }
}

export function fetchEventsIfNeeded(date) {
  return (dispatch, getState) => {
    if (shouldFetchEvents(getState())) {
      return dispatch(fetchEvents());
    }
  };
}

function fetchEvents() {
  return dispatch => {
    dispatch(fetchEventsRequest());
    // TODO: Replace with real API call
    return fetch("https://sheetlabs.com/WTL/events")
      .then(response => response.json())
      .then(json => dispatch(fetchEventsSuccess(json)));
  };
}

export function fetchEventsRequest() {
  return {
    type: types.FETCH_EVENTS_REQUEST,
    isFetching: true,
  };
}

export function fetchEventsSuccess(body) {
  return {
    type: types.FETCH_EVENTS_SUCCESS,
    isFetching: false,
    items: body,
  };
}

// TODO: write test for async action creators
// Reference: http://redux.js.org/docs/recipes/WritingTests.html#async-action-creators
export function fetchEventsFailure(ex) {
  return {
    type: types.FETCH_EVENTS_FAILURE,
    isFetching: false,
    ex,
  };
}

export function selectDate(date) {
  return {
    type: types.SELECT_DATE,
    selectedDate: date,
  };
}

export function adjustMap(map) {
  return {
    type: types.ADJUST_MAP,
    center: map.center,
    defaultZoom: map.defaultZoom,
    zoom: map.zoom,
    bounds: map.bounds,
  };
}
