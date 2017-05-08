import * as actions from "./EventActions";
import * as types from "./constants/ActionTypes";

describe("policies", () => {
  // TODO: Make sure there's no way it gets stuck in a loop trying to request events forever
  it("should recommend fetching events when there are zero events", () => {
    const state = { events: { items: [] } };
    const result = actions.shouldFetchEvents(state);
    expect(result).toEqual(true);
  });

  it("should not recommend fetching events when there are more than zero events", () => {
    const state = {
      events: {
        items: [
          {
            id: 1,
            showid: 1,
            showname: "The Grandstand",
            showstarttime: "2017-06-20T00:00:00+00:00",
            showroom: "Downstairs",
            venueid: 1,
            venuename: "The Creek & The Cave",
            venuefulladdress: "10-93 Jackson Ave, Long Island City, NY 11101",
            venuelatitude: 40.7432457,
            venuelongitude: -73.9517041,
            venuestatus: null,
          },
        ],
      },
    };
    const result = actions.shouldFetchEvents(state);
    expect(result).toEqual(false);
  });

  it("should not recommend fetching events when it is currently fetching events", () => {
    const state = { events: { isFetching: true } };
    const result = actions.shouldFetchEvents(state);
    expect(result).toEqual(false);
  });
});

describe("actions", () => {
  it("should create an action to make an API request to fetch events", () => {
    const expectedAction = {
      type: types.FETCH_EVENTS_REQUEST,
      isFetching: true,
    };

    expect(actions.fetchEventsRequest()).toEqual(expectedAction);
  });

  it("should create an action to receive events from a successful API request", () => {
    const body = [
      {
        id: 1,
        showid: 1,
        showname: "Modern Kicks",
        venueid: 1,
        venuename: "Happy Dog",
      },
    ];
    const expectedAction = {
      type: types.FETCH_EVENTS_SUCCESS,
      isFetching: false,
      items: body,
    };

    expect(actions.fetchEventsSuccess(body)).toEqual(expectedAction);
  });

  it("should create an action to handle a failed API request", () => {
    const ex = "404";
    const expectedAction = {
      type: types.FETCH_EVENTS_FAILURE,
      isFetching: false,
      ex: ex,
    };

    expect(actions.fetchEventsFailure(ex)).toEqual(expectedAction);
  });

  it("should create an action to select a date", () => {
    const selectedDate = "2017-02-08";
    const expectedAction = {
      type: types.SELECT_DATE,
      selectedDate,
    };

    expect(actions.selectDate(selectedDate)).toEqual(expectedAction);
  });

  it("should create an action to adjust the map", () => {
    const map = {
      center: { lat: 39.5, lng: -98.35 },
      defaultZoom: 4,
      zoom: 4,
      bounds: { se: { lat: 40, lng: -80 }, nw: { lat: 41, lng: -81 } },
    };
    const expectedAction = {
      type: types.ADJUST_MAP,
      center: map.center,
      defaultZoom: map.defaultZoom,
      zoom: map.zoom,
      bounds: map.bounds,
    };

    expect(actions.adjustMap(map)).toEqual(expectedAction);
  });
});
