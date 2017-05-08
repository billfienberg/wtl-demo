import { connect } from "react-redux";
import DayTabList from "./DayTabList";

export const getDays = events => {
  const totalDays = events.map(event => event.showstarttime.slice(0, 10));
  const uniqueDays = totalDays
    .filter((v, i) => totalDays.indexOf(v) === i)
    .sort();
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
