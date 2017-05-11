import rootReducer, { mapSettings, selectedDate, events } from "./reducers";
import * as actionTypes from "../actions/constants/ActionTypes";
import * as actions from "../actions/EventActions";

describe("mapSettings reducer", () => {
  it("should return the initial state", () => {
    // passing undefined to mapSettings returns default state
    expect(mapSettings(undefined, {})).toEqual({
      center: { lat: 39.5, lng: -98.35 },
      defaultZoom: 4,
      zoom: 4,
      bounds: { se: { lat: 40, lng: -80 }, nw: { lat: 41, lng: -81 } },
    });
  });

  it("should handle ADJUST_MAP", () => {
    const map = {
      center: { lat: 39.5, lng: -98.35 },
      defaultZoom: 4,
      zoom: 3,
      bounds: { se: { lat: 40, lng: -80 }, nw: { lat: 41, lng: -81 } },
    };

    // Action creator
    // const action = actions.adjustMap(map)

    // Inline action
    const action = {
      type: actionTypes.ADJUST_MAP,
      // copy the properties from the map variable using the spread operator
      ...map,

      // copy the properties from the map variable explicitly
      // center: map.center,
      // defaultZoom: map.defaultZoom,
      // zoom: map.zoom,
      // bounds: map.bounds
    };

    // passing undefined to mapSettings returns default state
    expect(mapSettings(undefined, action)).toEqual({
      center: { lat: 39.5, lng: -98.35 },
      defaultZoom: 4,
      zoom: 3,
      bounds: { se: { lat: 40, lng: -80 }, nw: { lat: 41, lng: -81 } },
    });
  });
});

describe("selectedDate reducer", () => {
  it("should return the initial state", () => {
    // passing undefined to selectedDate returns default state
    expect(selectedDate(undefined, {})).toEqual(
      new Date().toJSON().slice(0, 10)
    );
  });

  it("should handle SELECT_DATE", () => {
    // Action Creator
    // const action = actions.selectDate('2017-04-20')

    // Inline Action
    const action = {
      type: actionTypes.SELECT_DATE,
      selectedDate: "2017-04-20",
    };

    // passing undefined to selectedDate reducer returns default state
    expect(selectedDate(undefined, action)).toEqual("2017-04-20");
  });
});

describe("events reducer", () => {
  it("should return the initial state", () => {
    // passing undefined to events reducer returns default state
    expect(events(undefined, {})).toEqual({
      isFetching: false,
      items: [],
    });
  });

  it("should handle FETCH_EVENTS_REQUEST", () => {
    // Action Creator
    // const action = actions.fetchEventsRequest()

    // Inline Action
    const action = { type: actionTypes.FETCH_EVENTS_REQUEST, isFetching: true };

    // passing undefined to events reducer returns default state
    expect(events(undefined, action)).toEqual({
      isFetching: true,
      items: [],
    });
  });

  it("should handle FETCH_EVENTS_SUCCESS", () => {
    const body = [
      {
        id: 1,
        show: { id: 1, name: "Modern Kicks" },
        venue: { id: 1, name: "Happy Dog" },
      },
    ];

    // Action Creator
    // const action = actions.fetchEventsSuccess(body)

    // Inline Action
    const action = {
      type: actionTypes.FETCH_EVENTS_SUCCESS,
      isFetching: false,
      items: body,
    };

    // passing undefined to events reducer returns default state
    expect(events(undefined, action)).toEqual({
      isFetching: false,
      items: [
        {
          id: 1,
          show: { id: 1, name: "Modern Kicks" },
          venue: { id: 1, name: "Happy Dog" },
        },
      ],
    });
  });

  it("should handle FETCH_EVENTS_FAILURE", () => {
    // Action Creator
    // const action = actions.fetchEventsFailure()

    // Inline Action
    const action = {
      type: actionTypes.FETCH_EVENTS_FAILURE,
      isFetching: true,
      ex: "404",
    };

    // passing undefined to events reducer returns default state
    expect(events(undefined, action)).toEqual({
      isFetching: false,
      ex: "404",
      items: [],
    });
  });
});

describe("root reducer", () => {
  it("should return the initial state", () => {
    // passing undefined to root reducer returns default state
    expect(rootReducer(undefined, {})).toEqual({
      mapSettings: {
        center: { lat: 39.5, lng: -98.35 },
        defaultZoom: 4,
        zoom: 4,
        bounds: { se: { lat: 40, lng: -80 }, nw: { lat: 41, lng: -81 } },
      },
      selectedDate: new Date().toJSON().slice(0, 10),
      events: {
        isFetching: false,
        items: [],
      },
    });
  });
});
