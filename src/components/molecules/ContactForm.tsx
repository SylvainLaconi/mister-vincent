'use client';

import { sendMail } from '@/services/mailService';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const contactFormSchema = z.object({
	name: z
		.string()
		.max(100, { message: 'Le nom ne peut pas dépasser 100 caractères' })
		.optional(),
	email: z.string().email({ message: 'Email invalide' }),
	phone: z
		.string()
		.regex(/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/, {
			message: 'Le numéro de téléphone est incorrect',
		})
		.or(z.literal('')),
	message: z
		.string()
		.min(2, { message: 'Le message doit contenir au moins 2 caractères' })
		.max(500, { message: 'Le message ne peut pas dépasser 500 caractères' })
		.transform((value) => value.replace(/(<([^>]+)>)/gi, '')),
});

export type ContactFormFields = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormFields>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
	});

	const sendMailAction: () => void = handleSubmit(
		async (data: ContactFormFields) => {
			const result = await fetch('/api/sendMail', {
				method: 'POST',
				body: JSON.stringify(data),
			});

			if (result.status === 200) {
				toast('Mail envoyé avec succès', { autoClose: 5000, type: 'success' });
				reset();
			} else {
				toast('Une erreur est survenue', { autoClose: 5000, type: 'error' });
			}
		},
	);

	return (
		<form className="w-full" action={sendMailAction}>
			<div className="flex flex-col w-full bg-white rounded-xl p-5 gap-5">
				<div className="flex flex-col w-full">
					<label htmlFor="name" className="text-primary font-semibold">
						Nom
					</label>
					<input
						id="name"
						type="text"
						placeholder="Indiquez votre nom"
						className="border px-5 py-3"
						max={100}
						{...register('name')}
					/>
					<p className="text-red-500 text-xs">
						{errors.name ? errors.name.message : ''}
					</p>
				</div>

				<div className="flex flex-col w-full">
					<label htmlFor="email" className="text-primary font-semibold">
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Email"
						className="border px-5 py-3"
						max={100}
						required
						{...register('email')}
					/>
					<p className="text-red-50 text-xs">
						{errors.email ? errors.email.message : ''}
					</p>
				</div>

				<div className="flex flex-col w-full">
					<label htmlFor="phone" className="text-primary font-semibold">
						Téléphone
					</label>
					<input
						id="phone"
						type="tel"
						placeholder="Téléphone"
						className="border px-5 py-3"
						{...register('phone')}
					/>
					<p className="text-red-500 text-xs">
						{errors.phone ? errors.phone.message : ' '}
					</p>
				</div>

				<div className="flex flex-col w-full">
					<label htmlFor="message" className="text-primary  font-semibold">
						Dites-moi en quoi je peux vous aider
					</label>
					<textarea
						id="message"
						placeholder="Message"
						className="border px-5 py-3"
						maxLength={500}
						rows={5}
						required
						{...register('message')}
					/>
					<p className="text-red-500 text-xs">
						{errors.message ? errors.message.message : ' '}
					</p>
				</div>

				<button
					type="submit"
					className="rounded-full bg-primary text-white transition ease-in-out delay-100 hover:bg-primary_hover px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={isSubmitting}
				>
					Envoyer
				</button>
			</div>
			<ToastContainer />
		</form>
	);
};
