import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import MainLayout from "../../components/Layout/MainLayout";

import { Select } from "antd";

const handleChange = (value: string) => {
	console.log(`selected ${value}`);
};
export default function StudentReport() {
	const canvasEl = useRef(null);

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

	useEffect(() => {
		const ctx = canvasEl.current.getContext("2d");
		// const ctx = document.getElementById("myChart");
		const gradient = ctx.createLinearGradient(0, 16, 0, 600);
		gradient.addColorStop(0, colors.purple.half);
		gradient.addColorStop(0.65, colors.purple.quarter);
		gradient.addColorStop(1, colors.purple.zero);

		const Data = [10, 12, 25, 40, 66, 50, 42, 30, 50, 55];

		const labels = [
			"Dhanmondi",
			"Uttara",
			"Tongi",
			"ECB",
			"Konabari",
			"Baipail",
			"Dhamrai",
			"Savar",
			"Narayanganj",
			"Mirpur ",
			"Uttara Moylar Mor",
		];
		const data = {
			labels: labels,
			datasets: [
				{
					backgroundColor: gradient,
					label: "Student Statistic",
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
		<MainLayout>
			<div className=''>
				<span>All Reports</span>
				<div className=''>
					<div className=''>
						<Select
							defaultValue='Weekly'
							style={{ width: 120 }}
							onChange={handleChange}
							options={[
								{
									value: "Weekly",
									label: "Weekly",
								},
								{
									value: "Montly",
									label: "Montly",
								},
								{
									value: "Yearly",
									label: "Yearly",
								},
							]}
						/>
					</div>
					<canvas id='myChart' ref={canvasEl} height='100' />
				</div>
			</div>
		</MainLayout>
	);
}
