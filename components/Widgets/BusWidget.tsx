import React from "react";
import BaseWidget from "./BaseWidget";

const BusWidget = () => {
  return (
    <BaseWidget title="Bus Updates">
      <li className="font-bold cursor-pointer text-md py-1">
        Bus 3 Needs a another driver!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Bus 7 has so many feedbacks to check!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Bus 2 schdeule was updates , click to notify!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Bus 9 had an accident!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Bus 32 had the minimal students this week!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Bus 26 is going over speed too many times!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Bus 4 Drivers wants a day off!
      </li>
    </BaseWidget>
  );
};

export default BusWidget;
