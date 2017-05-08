import React from "react";

// Presentational Component
const Event = ({ ...props }) => {
  const date = props.showstarttime.slice(11, 16);
  const venueName = props.venuename;
  const showName = props.showname;
  return (
    <tr>
      <td style={{ paddingRight: "1rem" }}>{date}</td>
      <td style={{ paddingRight: "1rem" }}>{venueName}</td>
      <td>{showName}</td>
    </tr>
  );
};

export default Event;
