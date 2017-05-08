import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { fetchEventsIfNeeded } from "../actions/EventActions";
import VisibleGoogleMap from "../VisibleGoogleMap";
import VisibleDayTabList from "../VisibleDayTabList";
import VisibleEventList from "../VisibleEventList";

class AsyncApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedDate } = this.props;
    dispatch(fetchEventsIfNeeded(selectedDate));
    // dispatch({type: 'SELECT_DATE', selectedDate: '2017-04-20'})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedDate !== this.props.selectedDate) {
      const { dispatch, selectedDate } = nextProps;
      dispatch(fetchEventsIfNeeded(selectedDate));
    }
  }

  handleChange(nextDate) {
    // this.props.dispatch(selectDate(nextDate))
    // this.props.dispatch(fetchEventsIfNeeded(nextDate))
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedDate } = this.props;
    dispatch(fetchEventsIfNeeded(selectedDate));
  }

  render() {
    return (
      <div>
        <VisibleGoogleMap />
        <VisibleDayTabList />
        <VisibleEventList />
      </div>
    );
  }
}

AsyncApp.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  events: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { selectedDate, mapSettings, events } = state;

  return {
    selectedDate,
    events,
    mapSettings,
  };
}

export default connect(mapStateToProps)(AsyncApp);
