import * as React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

export const ContactFormSection = () => {
	return (
		<div
			className="w-screen py-20 px-5 flex flex-col items-center justify-center"
			id="contact"
		>
			<div className="flex flex-col w-full max-w-5xl gap-10">
				<h2 className="text-2xl text-center text-black lg:text-4xl xl:text-4xl 2xl:text-4xl">
					Vous souhaitez simplement me poser une{' '}
					<strong className="font-semibold text-[#c6d200]">question</strong> ...
				</h2>
				<div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row w-full gap-10">
					<form className="w-full">
						<div className="flex flex-col w-full bg-white rounded-xl p-5 gap-5">
							<input
								type="text"
								placeholder="Nom"
								className="border px-5 py-3"
							/>
							<input
								type="email"
								placeholder="Email"
								className="border px-5 py-3"
								required
							/>
							<input
								type="tel"
								placeholder="Téléphone"
								className="border px-5 py-3"
							/>
							<textarea placeholder="Message" className="border px-5 py-3" />
							<button
								type="submit"
								className="rounded-full bg-[#c6d200] text-white transition ease-in-out delay-100 hover:bg-[#B1BB00] px-5 py-3"
							>
								Envoyer
							</button>
						</div>
					</form>
					<div className="flex flex-col w-full gap-5">
						<h3 className="text-2xl">
							... ou me contacter{' '}
							<strong className="font-semibold text-[#c6d200]">
								directement
							</strong>
						</h3>
						<ul className="flex flex-col gap-5">
							<li className="flex gap-2 items-center">
								<AiOutlineMail size={20} />
								<a href="mailto:vincent@mister-vincent.fr" target="_blank">
									vincent@mister-vincent.fr
								</a>
							</li>
							<li className="flex gap-2 items-center">
								<BsTelephone size={20} />
								<a href="tel:+33664758405" target="_blank">
									+33 6 64 75 84 05
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
