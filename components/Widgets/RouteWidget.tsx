import React from "react";
import BaseWidget from "./BaseWidget";

const RouteWidget = () => {
  return (
    <BaseWidget title="Route Updates">
      <li className="font-bold cursor-pointer text-md py-1">
        Route 3 Needs a another bus!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Route 4 has so many feedbacks to check!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Route 2 schdeule was updates , click to notify!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Route 3 had the most students this week!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Route 11 had the minimal students this week!
      </li>
    </BaseWidget>
  );
};

export default RouteWidget;
