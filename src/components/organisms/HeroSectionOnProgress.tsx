import Image from 'next/image';
import * as React from 'react';
import logo from '../../../public/mister-vincent-logo-white.webp';
import heroImage from '../../../public/mister-vincent-hero.webp';

export const HeroSectionOnProgress = () => {
	return (
		<div
			className="flex flex-col items-center justify-center z-0"
			style={{
				height: '100vh',
				width: '100vw',
			}}
		>
			<Image
				src={heroImage}
				alt="Hero image"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/>
			<div className="flex flex-col items-center justify-center p-5 gap-10 z-10">
				<div className="flex place-items-center">
					<Image
						src={logo}
						alt="Logo Mister Vincent"
						width={300}
						height={300}
						priority
					/>
				</div>

				<h1 className="text-5xl font-semibold text-center text-white">
					Mister Vincent
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
					Vincent - Home Organiser
				</p>
			</div>
		</div>
	);
};
