'use client';

import Image from 'next/image';
import * as React from 'react';

export const HeroSection = () => {
	const scrolltoHash = function (element_id: string) {
		const element = document.getElementById(element_id);
		element?.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		});
	};

	return (
		<div
			className="flex flex-col items-center justify-center p-5 gap-10"
			style={{
				backgroundImage: `url('/mister-vincent-hero.webp')`,
				height: '100vh',
				width: '100vw',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
		>
			<div className="flex place-items-center -mb-7">
				<Image
					src="/mister-vincent-logo-white.webp"
					alt="Logo Mister Vincent"
					width={300}
					height={300}
					priority
				/>
			</div>

			<h1 className="text-5xl font-semibold text-center text-white">
				Mister Vincent
			</h1>

			<button
				className="rounded-full bg-[#c6d200] text-white transition ease-in-out delay-100 hover:bg-[#B1BB00] px-5 py-3"
				onClick={() => scrolltoHash('contact')}
			>
				Contactez-moi
			</button>
		</div>
	);
};
