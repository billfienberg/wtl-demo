import React from "react";
import VisibleGoogleMap from "./VisibleGoogleMap";
import VisibleDayTabList from "./VisibleDayTabList";
import VisibleEventList from "./VisibleEventList";

const App = () => (
  <div>
    <VisibleGoogleMap />
    <VisibleDayTabList />
    <VisibleEventList />
  </div>
);

export default App;
