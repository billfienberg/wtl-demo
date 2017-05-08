import { connect } from "react-redux";
import GoogleMapWrapper from "./GoogleMapWrapper";
import { getEventsByDate } from "./VisibleEventList";

const mapStateToProps = state => {
  const events = state.events.items;
  const selectedDate = state.selectedDate;
  const eventsByDate = getEventsByDate(events, selectedDate);
  return {
    events: eventsByDate,
    mapSettings: state.mapSettings,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (zoom, center, bounds) =>
      dispatch({ type: "ADJUST_MAP", zoom, center, bounds }),
  };
};

const VisibleGoogleMap = connect(mapStateToProps, mapDispatchToProps)(
  GoogleMapWrapper
);

export default VisibleGoogleMap;
