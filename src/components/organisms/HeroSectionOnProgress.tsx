import Image from 'next/image';
import * as React from 'react';

export const HeroSectionOnProgress = () => {
	return (
		<div
			className="flex flex-col items-center justify-center p-5 gap-5"
			style={{
				backgroundImage: `url('/mister-vincent-hero.webp')`,
				height: '100vh',
				width: '100vw',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
		>
			<div className="flex place-items-center">
				<Image
					src="/mister-vincent-logo-white.webp"
					alt="Logo Mister Vincent"
					width={300}
					height={300}
					priority
				/>
			</div>

			<h1 className="text-5xl font-semibold text-center text-white">
				Mister Vincent Solution
			</h1>

			<p className="pt-10 text-center text-black text-lg">
				Mon site est en construction, mais je suis prêt à vous aider !
			</p>

			<p className="pt-5 text-center text-black text-lg">
				Contactez-moi au{' '}
				<a href="tel:+33664758405" className="font-semibold">
					+33 6 64 75 84 05
				</a>{' '}
				ou par email à{' '}
				<a
					href="mailto:vincent@mister-vincent.fr"
					target="_blank"
					className="font-semibold"
				>
					vincent@mister-vincent.fr
				</a>
			</p>

			<p className="pt-5 text-center text-white text-lg">
				Vincent - Home Organizer
			</p>
		</div>
	);
};
