'use client';

import { z } from 'zod';

const schema = z.object({
	name: z.string().min(1, { message: 'Name is Required' }),
	lastName1: z.string().min(1, { message: 'LastNames are Required' }),
	lastName2: z.string().min(1, { message: 'LastNames are Required' }),
	email: z.string().email(1, { message: 'Invalid email address' }),
	tel: z.string().min(1, { message: 'Phone is Required' }),
	cel: z.string().min(1, { message: 'CellPhone is Required' }),
	address: z.string().min(1, { message: 'Address is Required' }),
	birthday: z.date({ message: 'Birthday is Required' }),
	ci: z.number().min(8, { message: 'Cedula is Required' }),
	photo: z.string().min(1, { message: 'Required' }),
});

const TeacherForm = ({ type }: { type: 'create' | 'update'; data?: any }) => {
	return <form className="">TeacherForm</form>;
};

export default TeacherForm;
