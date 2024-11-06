import AttendanceChart from '@/components/AttendanceChart';
import CountChart from '@/components/CountChart';
import EventCalendar from '@/components/EventCalendar';
import FinanceChart from '@/components/FinanceChart';
import UserCard from '@/components/UserCard';

const AdminPage = () => {
	return (
		<div className="flex p-4 gap-4 flex-col md:flex-row">
			{/* LEFT */}
			{/* aqui he clonado el div original para ver los cambios */}
			{/* <div className="w-full lg:w-2/3 flex flex-col gap-8"> */}
			<div className="w-full lg:w-full flex flex-col gap-8">
				{/* USER CARDS */}
				<div className="flex gap-4 justify-between flex-wrap">
					<UserCard type="patient" />
					<UserCard type="historias" />
				</div>
				{/* MIDDLE CHART */}
				<div className="flex gap-4 flex-col lg:flex-row">
					{/* COUNT CHART */}
					<div className="w-full lg:w-1/3 h-[450px]">
						<CountChart />
					</div>
					{/* ATTENDANCE CHART */}
					<div className="w-full lg:w-2/3 h-[450px]">
						<AttendanceChart />
					</div>
				</div>
				{/* BOTTOM CHART */}
				<div className="w-full h-[500px]">
					<FinanceChart />
				</div>
			</div>
			{/* RIGHT */}
			{/* aqui reemplazo flex por hidden */}
			<div className="hidden w-full lg:w-1/3 flex-col gap-8">
				<EventCalendar />
			</div>
		</div>
	);
};

export default AdminPage;
