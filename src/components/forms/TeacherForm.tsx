'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';
import Image from 'next/image';

const schema = z.object({
	name: z.string().min(3, { message: 'Name is Required' }),
	lastName1: z.string().min(3, { message: 'LastNames are Required' }),
	lastName2: z.string().min(3, { message: 'LastNames are Required' }),
	ci: z.string().min(8, { message: 'Cedula is Required' }),
	email: z.string().email({ message: 'Invalid email address' }),
	tel: z.string().min(11, { message: 'Phone is Required' }),
	cel: z.string().min(11, { message: 'CellPhone is Required' }),
	address: z.string().min(1, { message: 'Address is Required' }),
	birthday: z.string({ message: 'Birthday is Required' }),
	img: z.instanceof(File, { message: 'Image is Required' }),
	sex: z.enum(['male', 'female'], { message: 'Sex is Required' }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({ type, data }: { type: 'create' | 'update'; data?: any }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: zodResolver(schema),
	});

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});

	return (
		<form className="flex flex-col gap-8" onSubmit={onSubmit}>
			<h1 className="text-xl font-semibold">Crear paciente nuevo</h1>
			<span className="text-xs text-gray-400 font-medium">Informacion Personal</span>
			<div className="flex justify-between flex-wrap gap-4">
				<InputField
					label="Nombre"
					name="name"
					defaultValue={data?.name}
					register={register}
					error={errors?.name}
				/>
				<InputField
					label="Apellido1"
					name="lastName1"
					defaultValue={data?.lastName1}
					register={register}
					error={errors?.lastName1}
				/>
				<InputField
					label="Apellido2"
					name="lastName2"
					defaultValue={data?.lastName2}
					register={register}
					error={errors?.lastName2}
				/>
				<InputField
					label="Cedula"
					name="ci"
					defaultValue={data?.ci}
					register={register}
					error={errors?.ci}
				/>
				<InputField
					label="Email"
					name="email"
					type="email"
					defaultValue={data?.email}
					register={register}
					error={errors?.email}
				/>
				<InputField
					label="Direccion"
					name="address"
					defaultValue={data?.address}
					register={register}
					error={errors?.address}
				/>
				<InputField
					label="Telefono"
					name="tel"
					defaultValue={data?.tel}
					register={register}
					error={errors?.tel}
				/>
				<InputField
					label="Celular"
					name="cel"
					defaultValue={data?.cel}
					register={register}
					error={errors?.cel}
				/>
				<InputField
					label="Fecha de nacimiento"
					name="birthday"
					type="date"
					defaultValue={data?.birthday}
					register={register}
					error={errors?.birthday}
				/>
			</div>
			<div className="flex flex-col gap-2 w-full md:w-1/4">
				<label className="text-xs text-gray-500">Sexo</label>
				<select
					className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
					{...register('sex')}
					defaultValue={data?.sex}
				>
					<option value="male">Masculino</option>
					<option value="female">Femenino</option>
				</select>
				{errors.sex?.message && (
					<p className="text-xs text-red-400">{errors.sex.message.toString()}</p>
				)}
			</div>
			<div className="flex flex-col gap-2 w-full md:w-1/4">
				<label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer">
					<Image src="/upload.png" alt="" width={28} height={28} />
					<span>Upload a photo</span>
				</label>
				<input type="file" />
				{errors.img?.message && (
					<p className="text-xs text-red-400">{errors.img.message.toString()}</p>
				)}
			</div>
			<button className="bg-blue-400 text-white p-2 rounded-md">
				{type === 'create' ? 'Create' : 'Update'}
			</button>
		</form>
	);
};

export default TeacherForm;
