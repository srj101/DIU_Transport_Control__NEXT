import React from "react";
import Counter from "./Counter";
type Props = {
  students: number;
  facalties: number;
  buses: number;
  staffs: number;
  sales: number;
};

const TransportMeta: React.FC<Props> = ({
  students,
  facalties,
  buses,
  staffs,
  sales,
}) => {
  return (
    <div>
      <div className="flex flex-row justify-between gap-2">
        <div className="flex flex-col">
          <Counter
            value={students}
            duration={0.4}
            title="+ Students"
            color="#1d1d1d"
          />
        </div>
        <div className="flex flex-col">
          <Counter
            value={facalties}
            duration={0.5}
            title="+ Facaulties"
            color="#1d1d1d"
          />
        </div>
        <div className="flex flex-col">
          <Counter
            value={buses}
            duration={0.6}
            title="+ Buses"
            color="#1d1d1d"
          />
        </div>
        <div className="flex flex-col">
          <Counter
            value={staffs}
            duration={0.7}
            title="+ Staffs"
            color="#1d1d1d"
          />
        </div>
        <div className="flex flex-col">
          <Counter
            value={sales}
            duration={0.8}
            title="+ Tickets"
            color="#1d1d1d"
          />
        </div>
      </div>
    </div>
  );
};

export default TransportMeta;
