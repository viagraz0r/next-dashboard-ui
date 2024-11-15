import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { patientsData, role } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

type Patient = {
	id: number;
	patientId: string;
	name: string;
	lastName1: string;
	lastName2: string;
	ci: string;
	birthday: string;
	cel: number;
	tel: number;
	address: string;
	email?: string;
	emergencyName: string;
	emergencyNumber: string;
	ocupation: string;
	photo: string;
};

const columns = [
	{
		header: 'Info',
		accessor: 'info',
	},
	{
		header: 'Cedula',
		accessor: 'ci',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Fecha Nacimiento',
		accessor: 'birthday',
		className: 'hidden xl:table-cell',
	},
	{
		header: 'Celular',
		accessor: 'cel',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Telefono',
		accessor: 'tel',
		className: 'hidden lg:table-cell',
	},
	{
		header: 'Direccion',
		accessor: 'address',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Acciones',
		accessor: 'actions',
		className: 'hidden md:table-cell',
	},
];

const PatientListPage = () => {
	const renderRow = (item: Patient) => (
		<tr
			key={item.id}
			className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-myPurpleLight"
		>
			<td className="flex items-center gap-4 p-4">
				<Image
					src={item.photo}
					alt=""
					width={40}
					height={40}
					className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
				/>
				<div className="flex flex-col">
					<div className="flex flex-row gap-1">
						<h3>{item.name}</h3>
						<h3 className="font-semibold">{item.lastName1}</h3>
						<h3 className="font-semibold">{item.lastName2}</h3>
					</div>
					<p className="text-xs text-gray-500">{item?.email}</p>
				</div>
			</td>
			<td className="hidden md:table-cell">{item.ci}</td>
			<td className="hidden xl:table-cell">{item.birthday}</td>
			<td className="hidden md:table-cell">{item.cel}</td>
			<td className="hidden lg:table-cell">{item.tel}</td>
			<td className="hidden md:table-cell">{item.address}</td>
			<td>
				<div className="flex items-center gap-2">
					<Link href={`/list/patients/${item.id}`}>
						<button className="w-7 h-7 flex items-center justify-center rounded-full bg-mySky">
							<Image src="/view.png" alt="" width={16} height={16} />
						</button>
					</Link>
					{role === 'admin' && (
						// <button className="w-7 h-7 flex items-center justify-center rounded-full bg-myPurple">
						// 	<Image src="/delete.png" alt="" width={16} height={16} />
						// </button>
						<FormModal table="patient" type="delete" id={item.id} />
					)}
				</div>
			</td>
		</tr>
	);

	return (
		<div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
			{/* TOP */}
			<div className="flex items-center justify-between">
				<h1 className="hidden md:block text-lg font-semibold">Todos los pacientes</h1>
				<div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
					<TableSearch />
					<div className="flex items-center gap-4 self-end">
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-myYellow">
							<Image src="/filter.png" alt="" width={14} height={14} />
						</button>
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-myYellow">
							<Image src="/sort.png" alt="" width={14} height={14} />
						</button>
						{role === 'admin' && (
							// <button className="w-8 h-8 flex items-center justify-center rounded-full bg-myYellow">
							// 	<Image src="/plus.png" alt="" width={14} height={14} />
							// </button>
							<FormModal table="patient" type="create" />
						)}
					</div>
				</div>
			</div>
			{/* LIST */}
			<Table columns={columns} renderRow={renderRow} data={patientsData} />
			{/* PAGINATION */}
			<Pagination />
		</div>
	);
};

export default PatientListPage;
