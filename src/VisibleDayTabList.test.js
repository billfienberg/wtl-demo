import {
  getUniqueDays,
  getDayOfOldestEvent,
  getDayOfYoungestEvent,
  getOldestAndYoungestEventDays,
  getPresentAndFutureDays,
} from "./VisibleDayTabList";
import sampleEvents from "./sampleEvents";

describe("VisibleDayTabList container component", () => {
  it("filters events by unique days", () => {
    const copyOfEvents = sampleEvents.slice();
    const results = getUniqueDays(copyOfEvents);
    expect(results.length).toEqual(8);
  });

  it("filters out events in the past", () => {
    const copyOfEvents = sampleEvents.slice();
    const results = getPresentAndFutureDays(copyOfEvents);
    expect(results.length).toEqual(1);
  });

  it("returns the day of the oldest event in the list", () => {
    const copyOfEvents = sampleEvents.slice();
    const result = getDayOfOldestEvent(copyOfEvents);
    expect(result).toEqual("2016-10-07");
  });

  it("returns the day of the youngest event in the list", () => {
    const copyOfEvents = sampleEvents.slice();
    const result = getDayOfYoungestEvent(copyOfEvents);
    expect(result).toEqual("2020-04-20");
  });

  it("returns the oldest and youngest event days in the list", () => {
    const copyOfEvents = sampleEvents.slice();
    const result = getOldestAndYoungestEventDays(copyOfEvents);
    expect(result).toEqual(["2016-10-07", "2020-04-20"]);
  });
});
