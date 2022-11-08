import React from "react";

const StatisticsFilter = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-between">
        <select name="schedule" id="1">
          <option value="1">Schedule1</option>
          <option value="1">Schedule2</option>
          <option value="1">Schedule3</option>
          <option value="1">Schedule4</option>
        </select>

        <select name="month" id="1">
          <option value="1">January</option>
          <option value="1">February</option>
          <option value="1">March</option>
          <option value="1">April</option>
          <option value="1">May</option>
          <option value="1">June</option>
          <option value="1">July</option>
          <option value="1">August</option>
          <option value="1">September</option>
          <option value="1">October</option>
          <option value="1">November</option>
          <option value="1">December</option>
        </select>

        <select name="week" id="1">
          <option value="1">Week 1</option>
          <option value="1">Week 2</option>
          <option value="1">Week 3</option>
          <option value="1">Week 4</option>
        </select>

        <select name="year" id="1">
          <option value="1">2019</option>
          <option value="1">2020</option>
          <option value="1">2021</option>
          <option value="1">2022</option>
        </select>
      </div>

      <div className="">
        <input type="date" placeholder="Select a date" />
      </div>
    </div>
  );
};

export default StatisticsFilter;
