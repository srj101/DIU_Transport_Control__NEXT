import React from "react";
import BaseWidget from "./BaseWidget";

const FeedBackWidget = () => {
  return (
    <BaseWidget title="Student Feedbacks...">
      <li className="font-bold cursor-pointer text-md py-1">
        Sir Surjomukhi 3 er janla vanga!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Thanks for the schedule update!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Ticket prices are too high!
      </li>
      <li className="font-bold cursor-pointer text-md py-1">
        Can I pay with one card ?
      </li>
    </BaseWidget>
  );
};

export default FeedBackWidget;
