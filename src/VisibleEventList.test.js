import {
  getEventsByDate,
  getEventsByMapBounds,
  getEventsByDateAndMapBounds,
} from "./VisibleEventList";
import sampleEvents from "./sampleEvents";

const bounds = {
  // ~5-block radius in Columbus around The Shrunken Head
  nw: { lat: 39.98827754, lng: -83.01548695 },
  se: { lat: 39.98549906, lng: -83.00953245 },
};

// Jest Documentation: http://facebook.github.io/jest/docs/api.html#expectvalue

it("filters events by date", () => {
  const copyOfEvents = sampleEvents.slice();
  const eventsFilteredByDate = getEventsByDate(copyOfEvents, "2016-10-08");
  expect(eventsFilteredByDate.length).toEqual(13);
});

it("asserts that venue latitude is greater than or equal to (North of) the SE map boundary latitude", () => {
  // latitude and longitude are directly related
  // the larger the latitude, the farther north it is
  // the larger the longitude, the farther west is is
  const event = {
    venuename: `Shrunken Head`,
    venuelatitude: 39.9872237,
    venuelongitude: -83.0124675,
  };

  expect(event.venuelatitude).toEqual(39.9872237);
  expect(event.venuelatitude).toBeGreaterThanOrEqual(bounds.se.lat);
});

it("asserts that venue latitude is less than or equal to (South of) the NW map boundary latitude", () => {
  const event = {
    venuename: `Shrunken Head`,
    venuelatitude: 39.9872237,
    venuelongitude: -83.0124675,
  };

  expect(event.venuelatitude).toEqual(39.9872237);
  expect(event.venuelatitude).toBeLessThanOrEqual(bounds.nw.lat);
});

it("asserts that venue longitude is less than or equal to (West of) the SE map boundary longitude", () => {
  const event = {
    venuename: `Shrunken Head`,
    venuelatitude: 39.9872237,
    venuelongitude: -83.0124675,
  };

  expect(event.venuelongitude).toEqual(-83.0124675);
  expect(event.venuelongitude).toBeLessThanOrEqual(bounds.se.lng);
});

it("asserts that venue longitude is greater than or equal to (East of) the NW map boundary longitude", () => {
  const event = {
    venuename: `Shrunken Head`,
    venuelatitude: 39.9872237,
    venuelongitude: -83.0124675,
  };

  expect(event.venuelongitude).toEqual(-83.0124675);
  expect(event.venuelongitude).toBeGreaterThanOrEqual(bounds.nw.lng);
});

it("filters events by latitudes North of the SE map boundary", () => {
  const copyOfEvents = sampleEvents.slice();
  const result = copyOfEvents.filter(e => e.venuelatitude >= bounds.se.lat);

  expect(result.length).toEqual(44);
});

it("filters events by latitudes South of the NW map boundary", () => {
  const copyOfEvents = sampleEvents.slice();
  const result = copyOfEvents.filter(e => e.venuelatitude <= bounds.nw.lat);

  expect(result.length).toEqual(42);
});

it("filters events by longitudes West of the SE map boundary", () => {
  const copyOfEvents = sampleEvents.slice();
  const result = copyOfEvents.filter(e => e.venuelongitude >= bounds.se.lng);

  expect(result.length).toEqual(28);
});

it("filters events by longitudes East of the NW map boundary", () => {
  const copyOfEvents = sampleEvents.slice();
  const result = copyOfEvents.filter(e => e.venuelongitude <= bounds.nw.lng);

  expect(result.length).toEqual(54);
});

it("filters events by all four map bounds", () => {
  const copyOfEvents = sampleEvents.slice();
  const result = getEventsByMapBounds(sampleEvents, bounds);

  expect(result.length).toEqual(1);
});

it("finds the Shrunken Head show", () => {
  const copyOfEvents = sampleEvents.slice();
  const result = getEventsByDateAndMapBounds(
    sampleEvents,
    "2016-10-08",
    bounds
  );

  expect(result.length).toEqual(1);
});

it("finds all the events in the continental U.S. on 2016-10-08", () => {
  const bounds = {
    nw: { lat: 58.277292770, lng: -142.962890624 },
    se: { lat: 12.5805567050, lng: -45.4042 },
  };

  const result = getEventsByDateAndMapBounds(
    sampleEvents,
    "2016-10-08",
    bounds
  );

  expect(result.length).toEqual(13);
});
