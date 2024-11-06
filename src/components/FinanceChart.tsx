'use client';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{
		name: 'Ene',
		income: 4000,
		expanse: 2400,
	},
	{
		name: 'Feb',
		income: 3000,
		expanse: 1398,
	},
	{
		name: 'Mar',
		income: 2000,
		expanse: 9800,
	},
	{
		name: 'Abr',
		income: 2780,
		expanse: 3908,
	},
	{
		name: 'May',
		income: 1890,
		expanse: 4800,
	},
	{
		name: 'Jun',
		income: 2390,
		expanse: 3800,
	},
	{
		name: 'Jul',
		income: 3490,
		expanse: 4300,
	},
	{
		name: 'Ago',
		income: 3497,
		expanse: 3000,
	},
	{
		name: 'Sep',
		income: 4900,
		expanse: 4100,
	},
	{
		name: 'Oct',
		income: 5490,
		expanse: 4000,
	},
	{
		name: 'Nov',
		income: 340,
		expanse: 300,
	},
	{
		name: 'Dic',
		income: 3400,
		expanse: 4350,
	},
];

import Image from 'next/image';

const FinanceChart = () => {
	return (
		<div className="bg-white rounded-lg p-4 h-full">
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-semibold">Finances</h1>
				<Image src="/moreDark.png" alt="" width={20} height={20} />
			</div>
			<ResponsiveContainer width="100%" height="90%">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
					<XAxis
						dataKey="name"
						axisLine={false}
						tick={{ fill: '#d1d5db' }}
						tickLine={false}
						tickMargin={10}
					/>
					<YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} tickMargin={20} />
					<Tooltip />
					<Legend
						align="center"
						verticalAlign="top"
						wrapperStyle={{ paddingTop: '10px', paddingBottom: '30px' }}
					/>
					<Line type="monotone" dataKey="income" stroke="#c3ebfa" strokeWidth={5} />
					<Line type="monotone" dataKey="expanse" stroke="#cfceff" strokeWidth={5} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default FinanceChart;
