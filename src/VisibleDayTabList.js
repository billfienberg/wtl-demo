import { connect } from "react-redux";
import DayTabList from "./DayTabList";

export const getUniqueDays = events => {
  const days = {};
  events.forEach(event => {
    const date = event.showstarttime.slice(0, 10);
    // filter out events with dates in the past
    if (!days[date]) {
      days[date] = date;
    }
  });

  const uniqueDays = Object.keys(days).sort();
  return uniqueDays;
};

export const getPresentAndFutureDays = events => {
  const uniqueDays = getUniqueDays(events);
  const today = new Date().toJSON().slice(0, 10);
  const presentAndFutureDays = uniqueDays.filter(el => el >= today);
  return presentAndFutureDays;
};

export const getDayOfOldestEvent = events => {
  const uniqueDays = getUniqueDays(events);
  const oldestDay = uniqueDays[0];
  return oldestDay;
};

export const getDayOfYoungestEvent = events => {
  const totalDays = events.map(event => event.date).sort();
  return totalDays[totalDays.length - 1];
};

export const getOldestAndYoungestEventDays = events => {
  const totalDays = events.map(event => event.date).sort();
  return [totalDays[0], totalDays[totalDays.length - 1]];
};

const mapStateToProps = state => {
  return {
    days: getUniqueDays(state.events.items),
    selectedDate: state.selectedDate,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDayTabClick: date => {
      dispatch({ type: "SELECT_DATE", selectedDate: date });
    },
  };
};

// Container Component
const VisibleDayTabList = connect(mapStateToProps, mapDispatchToProps)(
  DayTabList
);

export default VisibleDayTabList;
