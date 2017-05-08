import React from "react";
import DayTab from "./DayTab";

// Presentational Component
const DayTabList = ({ days, selectedDate, onDayTabClick }) => (
  <div className="DayTabList">
    {days.map((day, index) => (
      <DayTab
        key={index}
        day={day}
        selectedDate={selectedDate}
        onClick={() => onDayTabClick(day)}
      />
    ))}
  </div>
);

export default DayTabList;
