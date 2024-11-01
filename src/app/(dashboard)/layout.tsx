import Menu from '@/components/Menu';
import NavBar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-screen flex">
			{/*LEFT*/}
			<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
				<Link className="flex items-center justify-center lg:justify-start gap-2" href="/">
					<Image src="/logo.svg" alt="logo" width={32} height={32} />
					<span className="hidden lg:block font-bold">zorDash</span>
				</Link>
				<Menu />
			</div>
			{/*RIGHT*/}
			<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll bg-[#c0c0c0]">
				<NavBar />
				{children}
			</div>
		</div>
	);
}
