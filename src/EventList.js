import React from "react";
import Event from "./Event";

// Presentational Component
const EventList = ({ events, isFetching }) => {
  const loading = <div>Loading...</div>;
  const table = (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Venue</th>
          <th>Show</th>
        </tr>
      </thead>
      <tbody>
        {events.map(event => {
          return <Event key={event.id} {...event} />;
        })}
      </tbody>
    </table>
  );
  const results = events.length > 0 ? table : <div>No results</div>;
  const content = isFetching ? loading : results;

  return content;
};

export default EventList;
