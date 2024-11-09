import Image from 'next/image';

const SinglePatientPage = () => {
	return (
		<div className="flex flex-1 flex-col xl:flex-row gap-4 p-4">
			{/* LEFT */}
			<div className="w-full xl:w-2/3">
				{/* INFO PATIENT CARD */}
				<div className="bg-mySky py-6 px-4 rounded-md flex flex-1 gap-4">
					{/* IMG CONTAINER */}
					<div className="w-1/3">
						<Image
							src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
							alt="img"
							width={144}
							height={144}
							className="w-36 h-36 rounded-full object-cover"
						/>
					</div>
					{/* INFO CONTAINER */}
					<div className="w-2/3 flex flex-col justify-between gap-4">
						<h1 className="text-xl font-semibold">John Doe Does</h1>
						<div className="w-full md:w-1/3 flex items-center gap-2">
							<h2>C.I:</h2>
							<span>12345678</span>
						</div>
						<div className="flex items-center justify-between gap-2 flex-wrap text-xs font font-medium">
							<div className="w-full md:w-1/3 flex items-center gap-2">
								<h3>F. Nacimiento:</h3>
								<span>10/10/1010</span>
							</div>
							<div className="w-full md:w-1/3 flex items-center gap-2">
								<h3>Celular:</h3>
								<span>1234567890</span>
							</div>
							<div className="w-full md:w-1/3 flex items-center gap-2">
								<h3>Telefono:</h3>
								<span>1234567890</span>
							</div>
							<div className="w-full md:w-1/3 flex items-center gap-2">
								<h3>Ocupacion:</h3>
								<span>Profesor Universitario</span>
							</div>
							<div className="w-full md:w-1/3 flex items-center gap-2">
								<h3>Email:</h3>
								<span>john@doe.com</span>
							</div>
							<div className="w-full md:w-1/3 flex items-center gap-2">
								<h3>Contacto Emergencia:</h3>
								<span>Luis Prieto</span>
							</div>
							<div className="w-full md:w-1/3 flex items-center gap-2">
								<h3>Numero Emergencia:</h3>
								<span>1234567890</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* RIGHT */}
			<div className="flex-1">
				{/* SMALL CARDS */}
				<div className="flex flex-1 gap-4 justify-between flex-wrap">
					{/* CARD */}
					<div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
						<Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6" />
						<div>
							<h1 className="text-xl font-semibold">Patologia</h1>
							<span className="text-sm text-gray-400">CATARATA</span>
						</div>
					</div>
					<div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
						<Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6" />
						<div>
							<h1 className="text-xl font-semibold">Referencia</h1>
							<span className="text-sm text-gray-400">Dr. Locura</span>
						</div>
					</div>
					<div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
						<Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6" />
						<div>
							<h1 className="text-xl font-semibold">Antecedentes</h1>
							<span className="text-sm text-gray-400">2 años utilizando gafas</span>
						</div>
					</div>
					<div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
						<Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6" />
						<div>
							<h1 className="text-xl font-semibold">Motivo</h1>
							<span className="text-sm text-gray-400">Lagrimeo excesivo</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SinglePatientPage;
