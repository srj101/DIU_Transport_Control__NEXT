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

const data = [
  { name: "Bus 1", daily: 88, monthly: 1800, schedule1: 2400, all: 2400 },
  { name: "Bus 2", daily: 76, monthly: 600, schedule1: 2900, all: 2500 },
  { name: "Bus 3", daily: 55, monthly: 2900, schedule1: 2200, all: 2700 },
  { name: "Bus 4", daily: 95, monthly: 1400, schedule1: 1200, all: 4500 },
  { name: "Bus 5", daily: 75, monthly: 1700, schedule1: 450, all: 3200 },
  { name: "Bus 6", daily: 66, monthly: 900, schedule1: 1800, all: 2200 },
  { name: "Bus 8", daily: 80, monthly: 1800, schedule1: 2300, all: 2100 },
  { name: "Bus 9", daily: 85, monthly: 1300, schedule1: 1500, all: 1800 },
  { name: "Bus 10", daily: 68, monthly: 1300, schedule1: 1500, all: 2900 },
  { name: "Bus 11", daily: 72, monthly: 1300, schedule1: 1500, all: 1400 },
  { name: "Bus 12", daily: 74, monthly: 1300, schedule1: 1500, all: 2300 },
  { name: "Bus 14", daily: 99, monthly: 1800, schedule1: 2400, all: 2400 },
  { name: "Bus 15", daily: 77, monthly: 600, schedule1: 2900, all: 2500 },
  { name: "Bus 13", daily: 49, monthly: 1300, schedule1: 1500, all: 2350 },
  { name: "Bus 16", daily: 53, monthly: 2900, schedule1: 2200, all: 2700 },
  { name: "Bus 17", daily: 77, monthly: 1400, schedule1: 1200, all: 4500 },
  { name: "Bus 18", daily: 75, monthly: 1700, schedule1: 450, all: 3200 },
  { name: "Bus 19", daily: 69, monthly: 900, schedule1: 1800, all: 2200 },
  { name: "Bus 20", daily: 37, monthly: 1800, schedule1: 2300, all: 2100 },
  { name: "Bus 21", daily: 77, monthly: 1300, schedule1: 1500, all: 1800 },
  { name: "Bus 22", daily: 29, monthly: 1300, schedule1: 1500, all: 2900 },
  { name: "Bus 23", daily: 74, monthly: 1300, schedule1: 1500, all: 1400 },
  { name: "Bus 24", daily: 71, monthly: 1300, schedule1: 1500, all: 2300 },
  { name: "Bus 25", daily: 70, monthly: 1300, schedule1: 1500, all: 2350 },
];

type Props = {
  title: string;
  year: number;
  month: string;
  day: string;
  scheduleId: string;
};
const BusStatistics: React.FC<Props> = ({
  title,
  day,
  month,
  year,
  scheduleId,
}) => {
  return (
    <StatisticsContainer title={title}>
      <div className="w-full">
        <p className="text-center">Currently showing all time statistics</p>
        <BarChart width={950} height={300} data={data}>
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
          <Bar dataKey="daily" fill="#1d1d1d" barSize={30} />
        </BarChart>
      </div>
    </StatisticsContainer>
  );
};

export default BusStatistics;
