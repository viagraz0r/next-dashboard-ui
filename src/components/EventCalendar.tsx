'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//TEMPORARY DATA
const events = [
	{
		id: 1,
		title: 'Lorem ipsum dolor',
		time: '12:00 PM - 2:00 PM',
		description: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit.',
	},
	{
		id: 2,
		title: 'Lorem ipsum dolor',
		time: '12:00 PM - 2:00 PM',
		description: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit.',
	},
	{
		id: 3,
		title: 'Lorem ipsum dolor',
		time: '12:00 PM - 2:00 PM',
		description: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit.',
	},
	{
		id: 4,
		title: 'Lorem ipsum dolor',
		time: '12:00 PM - 2:00 PM',
		description: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit.',
	},
];

const EventCalendar = () => {
	const [value, onChange] = useState<Value>(new Date());

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<h1>
			{isClient ? (
				<div className="bg-white rounded-md p-4">
					<Calendar onChange={onChange} value={value} />
					<div className="flex items-center justify-between">
						<h1 className="text-xl font-semibold my-4">Eventos</h1>
						<Image src="/moreDark.png" alt="" width={20} height={20} />
					</div>
					<div className="flex flex-col gap-4">
						{events.map((event) => (
							<div
								className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-mySky even:border-t-myPurple"
								key={event.id}
							>
								<div className="flex items-center justify-between">
									<h1 className="font-semibold text-gray-600">{event.title}</h1>
									<span className="text-gray-300 text-xs">{event.time}</span>
								</div>
								<p className="mt-2 text-gray-400 text-sm">{event.description}</p>
							</div>
						))}
					</div>
				</div>
			) : (
				'Prerendered'
			)}
		</h1>
	);
};

export default EventCalendar;
