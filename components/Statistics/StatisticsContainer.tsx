import React from "react";

type Props = {
  title: string;
  children: React.ReactNode | React.ReactNode[] | React.ReactElement;
};

const StatisticsContainer: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex flex-col ">
      <div className="">
        <h4 className="font-bold text-xl py-4">{title}</h4>
      </div>

      {children}
    </div>
  );
};

export default StatisticsContainer;
