import React, { Component } from "react";
import { connect } from "react-redux";
import App from "./App";

class AsyncApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(next) {
    // this.props.dispatch(selectSubreddit(nextSubreddit))
    // this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
  }

  componentDidMount() {
    // const { dispatch } = this.props
    // dispatch(fetchEventsIfNeeded())
    // const { events } = this.props
    // const now = new Date().toJSON().slice(0,10)
    // const date = events.length === 0 ? now : events[events.length - 1].showtimestart.slice(0,10)
    // dispatch({type: 'SET_DATE', date})
  }

  render() {
    return <App />;
  }
}

// TODO: Add PropTypes

function mapStateToProps(state) {
  return {
    selectedDate: state.selectedDate,
    events: state.events,
    map: state.settings,
  };
}

export default connect(mapStateToProps)(AsyncApp);
