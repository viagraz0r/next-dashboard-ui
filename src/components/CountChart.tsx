'use client';

import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: 'Total',
		count: 100,
		fill: 'white',
	},
	{
		name: 'Women',
		count: 30,
		fill: '#fae27c',
	},
	{
		name: 'Men',
		count: 70,
		fill: '#c3ebfa',
	},
];

const CountChart = () => {
	return (
		<div className="bg-white rounded-xl w-full h-full p-4 ">
			{/* TITLE */}
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-semibold">Patients</h1>
				<Image src="/moreDark.png" alt="" width={20} height={20} />
			</div>
			{/* CHART */}
			<div className="w-full h-[75%]">
				<ResponsiveContainer>
					<RadialBarChart
						cx="50%"
						cy="50%"
						innerRadius="40%"
						outerRadius="100%"
						barSize={32}
						data={data}
					>
						<RadialBar
							// label={{ position: 'insideStart', fill: '#fff' }}
							background
							dataKey="count"
						/>
						{/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
					</RadialBarChart>
				</ResponsiveContainer>
			</div>
			{/* BOTTOM */}
			<div className="flex justify-center gap-16">
				<div className="flex flex-col gap-1">
					<div className="w-5 h-5 bg-mySky rounded-full" />
					<h1 className="font-bold ">1.234</h1>
					<h2 className="text-xs text-gray-300">Women</h2>
				</div>

				<div className="flex flex-col gap-1">
					<div className="w-5 h-5 bg-myYellow rounded-full" />
					<h1 className="font-bold ">534</h1>
					<h2 className="text-xs text-gray-300">Men</h2>
				</div>
			</div>
		</div>
	);
};

export default CountChart;
