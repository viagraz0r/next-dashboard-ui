const Pagination = () => {
	return (
		<div className="flex items-center justify-between p-4 text-gray-500">
			<button
				disabled
				className="py-2 px-2 md:px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
			>
				Anterior
			</button>
			<div className="flex items-center md:gap-2 gap-[0.20rem] text-xs md:text-sm">
				<button className="px-2 rounded-sm bg-mySky">1</button>
				<button className="px-2 rounded-sm hidden sm:block">2</button>
				<button className="px-2 rounded-sm hidden sm:block">3</button>
				<button className="px-2 rounded-sm hidden md:block">4</button>
				<button className="px-2 rounded-sm hidden lg:block">5</button>
				...
				<button className="px-2 rounded-sm">10</button>
			</div>
			<button className="py-2 px-2 md:px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
				Siguiente
			</button>
		</div>
	);
};

export default Pagination;
