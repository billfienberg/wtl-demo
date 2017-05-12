import { connect } from "react-redux";
import DayTabList from "./DayTabList";

export const getDays = events => {
  const days = {};
  const today = new Date().toJSON().slice(0, 10);
  events.forEach(event => {
    const date = event.showstarttime.slice(0, 10);
    // filter out events with dates in the past
    if (date >= today && !days[date]) {
      days[date] = date;
    }
  });

  const uniqueDays = Object.keys(days).sort();
  return uniqueDays;
};

export const getDayOfOldestEvent = events => {
  const totalDays = events.map(event => event.date).sort();
  return totalDays[0];
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
    days: getDays(state.events.items),
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
