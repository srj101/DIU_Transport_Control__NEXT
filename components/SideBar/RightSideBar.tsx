import React from "react";
import BusWidget from "../Widgets/BusWidget";
import FeedBackWidget from "../Widgets/FeedBackWidget";
import RouteWidget from "../Widgets/RouteWidget";

const RightSideBar = () => {
  return (
    <div>
      <h2 className="text-xl font-bold border-b-2">Recent Updates</h2>

      <RouteWidget />
      <BusWidget />
      <FeedBackWidget />
    </div>
  );
};

export default RightSideBar;
