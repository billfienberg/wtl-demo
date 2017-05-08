import React from "react";

// Presentational Component
const DayTab = ({ onClick, day, selectedDate }) => {
  const classNames = day === selectedDate ? "DayTab SelectedDayTab" : "DayTab";

  return (
    <a onClick={onClick} className={classNames}>
      {day.slice(5)}
    </a>
  );
};

export default DayTab;
