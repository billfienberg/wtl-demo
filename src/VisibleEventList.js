import { connect } from "react-redux";
import EventList from "./EventList";

export const getEventsByDate = (events, date) => {
  const output = events.filter(e => {
    const eventDate = e.showstarttime.slice(0, 10);
    return eventDate === date;
  });
  return output;
};

export const getEventsByMapBounds = (events, bounds) => {
  const { se, nw } = bounds;
  return events.filter(
    e =>
      e.venuelatitude >= se.lat && // North of SE map boundary
      e.venuelatitude <= nw.lat && // South of NW map boundary
      e.venuelongitude <= se.lng && // West of SE map boundary
      e.venuelongitude >= nw.lng // East of NW map boundary
  );
};

export const getEventsByDateAndMapBounds = (events, date, bounds) => {
  const { se, nw } = bounds;
  const output = events.filter(e => {
    const eventDate = e.showstarttime.slice(0, 10);
    return (
      eventDate === date &&
      e.venuelatitude >= se.lat && // North of SE map boundary
      e.venuelatitude <= nw.lat && // South of NW map boundary
      e.venuelongitude <= se.lng && // West of SE map boundary
      e.venuelongitude >= nw.lng // East of NW map boundary
    );
  });
  return output;
};

const mapStateToProps = state => {
  return {
    events: getEventsByDateAndMapBounds(
      state.events.items,
      state.selectedDate,
      state.mapSettings.bounds
    ),
    isFetching: state.events.isFetching,
  };
};

const mapDispatchToProps = () => {
  return {};
};

// Container Component
const VisibleEventList = connect(mapStateToProps, mapDispatchToProps)(
  EventList
);

export default VisibleEventList;
