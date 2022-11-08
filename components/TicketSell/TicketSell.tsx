import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

import { Select } from "antd";
import { label } from "aws-amplify";
import MainLayout from "../Layout/MainLayout";

const Data = [10, 12, 25, 40, 66, 50, 42, 30, 50, 55];

const coloumn = [
	[
		"Saturday",
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
	],
	[
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],
	["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
	["ID-1", "ID-2", "ID-3", "ID-4", "ID-5", "ID-6", "ID-7", "ID-8", "ID-9"],
];

export default function TicketSell() {
	const canvasEl = useRef(null);
	const [value, setValue] = useState("0");
	const colors = {
		purple: {
			default: "rgba(149, 76, 233, 1)",
			half: "rgba(149, 76, 233, 0.5)",
			quarter: "rgba(149, 76, 233, 0.25)",
			zero: "rgba(149, 76, 233, 0)",
		},
		indigo: {
			default: "rgba(80, 102, 120, 1)",
			quarter: "rgba(80, 102, 120, 0.25)",
		},
	};
	const handleChange = (value: string) => {
		setValue(value);
	};

	useEffect(() => {
		const ctx = canvasEl.current.getContext("2d");
		// const ctx = document.getElementById("myChart");
		const gradient = ctx.createLinearGradient(0, 16, 0, 600);
		gradient.addColorStop(0, colors.purple.half);
		gradient.addColorStop(0.65, colors.purple.quarter);
		gradient.addColorStop(1, colors.purple.zero);

		const data = {
			labels: coloumn[Number(value)],
			datasets: [
				{
					backgroundColor: gradient,
					label: "Ticket Sell Statistic",
					data: Data,
					borderWidth: 2,
					borderColor: colors.purple.default,
				},
			],
		};
		const config = {
			type: "bar",
			data: data,
		};
		const myLineChart = new Chart(ctx, config);

		return function cleanup() {
			myLineChart.destroy();
		};
	});

	return (
		<div className=''>
			<span></span>
			<div className=''>
				<div className=''>
					<Select
						defaultValue={"0"}
						style={{ width: 120 }}
						onChange={handleChange}
						options={[
							{
								value: "0",
								label: "Weekly",
							},
							{
								value: "1",
								label: "Montly",
							},
							{
								value: "2",
								label: "Yearly",
							},
							{
								value: "3",
								label: "Schedule",
							},
						]}
					/>
				</div>
				<canvas id='myChart' ref={canvasEl} height='100' />
			</div>
		</div>
	);
}
