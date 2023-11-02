import Image from 'next/image';
import * as React from 'react';

export const HeroSection = () => {
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
				Mister Vincent Solutions
			</h1>

			<button className="rounded-full bg-[#c6d200] text-white transition ease-in-out delay-100 hover:bg-[#B1BB00] px-5 py-3">
				Contactez-moi
			</button>
		</div>
	);
};
