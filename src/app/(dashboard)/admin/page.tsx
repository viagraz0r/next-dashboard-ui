import CountChart from '@/components/CountChart';
import UserCard from '@/components/UserCard';

const AdminPage = () => {
	return (
		<div className="flex p-4 gap-4 flex-col md:flex-row">
			{/* LEFT */}
			<div className="w-full lg:w-2/3 flex flex-col gap-8">
				{/* USER CARDS */}
				<div className="flex gap-4 justify-between flex-wrap">
					<UserCard type="patient" />
					<UserCard type="doctor" />
				</div>
				{/* MIDDLE CHART */}
				<div className="flex gap-4 flex-col lg:flex-row">
					{/* COUNT CHART */}
					<div className="w-full lg:w-1/3 h-[450px]">
						<CountChart />
					</div>
					{/* ATTENDANCE CHART */}
					<div className="w-full lg:w-2/3 h-[450px]"></div>
				</div>
				{/* BOTTOM CHART */}
				<div></div>
			</div>
			{/* RIGHT */}
			<div className="w-full lg:w-1/3">R</div>
		</div>
	);
};

export default AdminPage;
