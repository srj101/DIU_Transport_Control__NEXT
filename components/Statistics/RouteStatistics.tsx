import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import StatisticsContainer from "./StatisticsContainer";
import StatisticsFilter from "./StatisticsFilter";

const data = [
  {
    name: "Route 1",
    daily: 400,
    monthly: 18000,
    schedule1: 2400,
    all: 2400,
    weekly: 1800,
  },
  {
    name: "Route 2",
    daily: 600,
    monthly: 6000,
    schedule1: 2900,
    all: 2500,
    weekly: 1800,
  },
  {
    name: "Route 3",
    daily: 100,
    monthly: 29000,
    schedule1: 2200,
    all: 2700,
    weekly: 1800,
  },
  {
    name: "Route 4",
    daily: 900,
    monthly: 14000,
    schedule1: 1200,
    all: 4500,
    weekly: 1800,
  },
  {
    name: "Route 5",
    daily: 200,
    monthly: 17000,
    schedule1: 450,
    all: 3200,
    weekly: 1800,
  },
  {
    name: "Route 6",
    daily: 350,
    monthly: 9000,
    schedule1: 1800,
    all: 2200,
    weekly: 1800,
  },
  {
    name: "Route 8",
    daily: 680,
    monthly: 18000,
    schedule1: 2300,
    all: 2100,
    weekly: 1800,
  },
  {
    name: "Route 9",
    daily: 620,
    monthly: 13000,
    schedule1: 1500,
    all: 1800,
    weekly: 1800,
  },
  {
    name: "Route 10",
    daily: 620,
    monthly: 13000,
    schedule1: 1500,
    all: 2900,
    weekly: 1800,
  },
  {
    name: "Route 11",
    daily: 620,
    monthly: 13000,
    schedule1: 1500,
    all: 1400,
    weekly: 1800,
  },
  {
    name: "Route 12",
    daily: 620,
    monthly: 13000,
    schedule1: 1500,
    all: 2300,
    weekly: 1800,
  },
  {
    name: "Route 13",
    daily: 620,
    monthly: 13000,
    schedule1: 1500,
    all: 2350,
    weekly: 1800,
  },
];

type Props = {
  title: string;
  year: number;
  month: string;
  day: string;
  scheduleId: string;
};

const RouteStatistics: React.FC<Props> = ({
  title,
  day,
  month,
  year,
  scheduleId,
}) => {
  return (
    <StatisticsContainer title={title}>
      <StatisticsFilter />
      <div className="w-full">
        <p className="text-center">Currently showing all time statistics</p>
        <BarChart width={950} height={500} data={data}>
          <XAxis dataKey="name" stroke="#1d1d1d" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="all" fill="#1d1d1d" barSize={30} />
          <Bar dataKey="daily" fill="#1d1d1d" barSize={30} />
          <Bar dataKey="weekly" fill="#1d1d1d" barSize={30} />
          {/* <Bar dataKey="monthly" fill="#1d1d1d" barSize={30} /> */}
          <Bar dataKey="schedule1" fill="#1d1d1d" barSize={30} />
        </BarChart>
      </div>
    </StatisticsContainer>
  );
};

export default RouteStatistics;
