import {
  getDays,
  getDayOfOldestEvent,
  getDayOfYoungestEvent,
  getOldestAndYoungestEventDays,
} from "./VisibleDayTabList";
import sampleEvents from "./sampleEvents";

it("filters events by unique days", () => {
  const copyOfEvents = sampleEvents.slice();
  const results = getDays(copyOfEvents);
  expect(results.length).toEqual(7);
});

it("returns the day of the oldest event in the list", () => {
  const copyOfEvents = sampleEvents.slice();
  const result = getDayOfOldestEvent(copyOfEvents);
  expect(result).toEqual("2016-10-07");
});

it("returns the day of the youngest event in the list", () => {
  const copyOfEvents = sampleEvents.slice();
  const result = getDayOfYoungestEvent(copyOfEvents);
  expect(result).toEqual("2016-10-13");
});

it("returns the oldest and youngest event days in the list", () => {
  const copyOfEvents = sampleEvents.slice();
  const result = getOldestAndYoungestEventDays(copyOfEvents);
  expect(result).toEqual(["2016-10-07", "2016-10-13"]);
});
