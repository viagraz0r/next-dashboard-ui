import UserCard from '@/components/UserCard';

const AdminPage = () => {
	return (
		<div className="flex p-4 gap-4 flex-col md:flex-row">
			{/* LEFT */}
			<div className="w-full lg:w-2/3">
				{/* USER CARDS */}
				<div className="flex gap-4 justify-between flex-wrap">
					<UserCard type="patient" />
					<UserCard type="doctor" />
				</div>
			</div>
			{/* RIGHT */}
			<div className="w-full lg:w-1/3">R</div>
		</div>
	);
};

export default AdminPage;
