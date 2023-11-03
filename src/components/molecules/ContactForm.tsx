'use client';

import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
type Props = {};

type Inputs = {
	name: string;
	email: string;
	phone: string;
	message: string;
};

export const ContactForm = (props: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col w-full bg-white rounded-xl p-5 gap-5">
				<div className="flex flex-col w-full">
					<label htmlFor="name" className="text-[#c6d200] font-semibold">
						Nom
					</label>
					<input
						id="name"
						type="text"
						placeholder="Indiquez votre nom"
						className="border px-5 py-3"
						{...register('name')}
					/>
				</div>

				<div className="flex flex-col w-full">
					<label htmlFor="email" className="text-[#c6d200] font-semibold">
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Email"
						className="border px-5 py-3"
						required
						{...register('email')}
					/>
				</div>

				<div className="flex flex-col w-full">
					<label htmlFor="phone" className="text-[#c6d200] font-semibold">
						Téléphone
					</label>
					<input
						id="phone"
						type="tel"
						placeholder="Téléphone"
						className="border px-5 py-3"
						{...register('phone')}
					/>
				</div>

				<div className="flex flex-col w-full">
					<label htmlFor="message" className="text-[#c6d200]  font-semibold">
						Dites-moi en quoi je peux vous aider
					</label>
					<textarea
						id="message"
						placeholder="Message"
						className="border px-5 py-3"
						required
						{...register('message')}
					/>
				</div>

				<button
					type="submit"
					className="rounded-full bg-[#c6d200] text-white transition ease-in-out delay-100 hover:bg-[#B1BB00] px-5 py-3"
				>
					Envoyer
				</button>
			</div>
		</form>
	);
};
