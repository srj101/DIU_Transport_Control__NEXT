import React from "react";

type Props = {
  title: string;
  children: React.ReactNode | React.ReactNode[] | React.ReactElement;
};

const BaseWidget: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex flex-col py-4">
      <h3 className="font-bold mb-2 text-lg">{title}</h3>

      <div className="px-2">
        <div className="flex flex-col">
          <ul className="list-disc">{children}</ul>
        </div>
      </div>
    </div>
  );
};

export default BaseWidget;
