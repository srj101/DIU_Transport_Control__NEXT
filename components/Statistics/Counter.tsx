import React from "react";
import CountUp from "react-countup";

type Props = {
  value: number;
  duration: number;
  title: string;
  color: string;
};
const Counter: React.FC<Props> = ({ value, duration, title, color }) => {
  return (
    <div
      className={`border-8 border-grey-500 rounded-full p-12 my-4 bg-[#1d1d1d] bg-[${color}] `}
    >
      <CountUp
        end={value}
        duration={duration}
        suffix={title}
        enableScrollSpy
        className="font-bold text-lg text-white"
      />
    </div>
  );
};

export default Counter;
