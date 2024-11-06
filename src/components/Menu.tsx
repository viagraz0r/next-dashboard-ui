import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
	{
		title: 'MENU',
		items: [
			{
				icon: '/home.png',
				label: 'Inicio',
				href: '/',
				visible: ['admin', 'patient'],
			},
			{
				icon: '/student.png',
				label: 'Pacientes',
				href: '/list/patients',
				visible: ['admin', 'patient'],
			},
		],
	},
	// {
	// 	title: 'OTHER',
	// 	items: [
	// 		{
	// 			icon: '/profile.png',
	// 			label: 'Profile',
	// 			href: '/profile',
	// 			visible: ['admin', 'teacher', 'student', 'parent'],
	// 		},
	// 		{
	// 			icon: '/setting.png',
	// 			label: 'Settings',
	// 			href: '/settings',
	// 			visible: ['admin', 'teacher', 'student', 'parent'],
	// 		},
	// 		{
	// 			icon: '/logout.png',
	// 			label: 'Logout',
	// 			href: '/logout',
	// 			visible: ['admin', 'teacher', 'student', 'parent'],
	// 		},
	// 	],
	// },
];

const Menu = () => {
	return (
		<div className="mt-4 text-sm">
			{menuItems.map((i) => (
				<div className="flex flex-col gap-2" key={i.title}>
					<span className="hidden text-gray-400 font-light my-4">{i.title}</span>{' '}
					{/* inside classname I remove lg:block  */}
					{i.items.map((item) => (
						<Link
							href={item.href}
							key={item.label}
							className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-mySkyLight"
						>
							<Image src={item.icon} alt="" width={20} height={20} />
							<span className="hidden lg:block">{item.label}</span>
						</Link>
					))}
				</div>
			))}
		</div>
	);
};

export default Menu;
