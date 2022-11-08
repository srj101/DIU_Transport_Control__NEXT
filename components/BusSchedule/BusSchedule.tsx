import { Select, Space, Table, Tag } from "antd";
import React, { useState } from "react";

const { Column, ColumnGroup } = Table;

interface DataType {
	key: React.Key;
	Day: string;
	Time: string;
	ScheduleID: number;
}

const coloumn = [
	[
		{
			key: "starting",
			Day: "Sunday",
			Time: "7:15AM",
			ScheduleID: 1,
		},
		{
			key: "starting",
			Day: "Monday",
			Time: "7:15AM",
			ScheduleID: 2,
		},
	],
	[
		{
			key: "departure",
			Day: "Sunday",
			Time: "4:15PM",
			ScheduleID: 3,
		},
		{
			key: "departure",
			Day: "Monday",
			Time: "4:15PM",
			ScheduleID: 4,
		},
	],
];

const BusSchedule = () => {
	return (
		<div>
			<Table dataSource={coloumn[0]}>
				<ColumnGroup title='Starting'>
					<Column title='scheduleID' dataIndex='ScheduleID' key='ScheduleID' />
					<Column title='Day' dataIndex='Day' key='Day' />
					<Column title='Time' dataIndex='Time' key='Time' />
				</ColumnGroup>
			</Table>

			<Table dataSource={coloumn[1]}>
				<ColumnGroup title='Departure'>
					<Column title='scheduleID' dataIndex='ScheduleID' key='ScheduleID' />
					<Column title='Day' dataIndex='Day' key='Day' />
					<Column title='Time' dataIndex='Time' key='Time' />
				</ColumnGroup>
			</Table>
		</div>
	);
};

export default BusSchedule;
