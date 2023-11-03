import Image from 'next/image';
import * as React from 'react';
import logo from '../../../public/mister-vincent-logo-white.webp';
import heroImage from '../../../public/mister-vincent-hero.webp';
import { ScrollToHashButton } from '../molecules/ScrollToHashButton';

export const HeroSection = () => {
	return (
		<div
			className="flex flex-col items-center justify-center -z-1"
			style={{
				height: '100vh',
				width: '100vw',
			}}
		>
			<Image
				src={heroImage}
				alt="Hero image"
				fill
				sizes="100vw"
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
				}}
			/>
			<div className="flex flex-col items-center justify-center p-5 gap-4 lg:gap-10 xl:gap-10 2xl:gap-10 z-0">
				<div className="flex place-items-center">
					<Image
						src={logo}
						alt="Logo Mister Vincent"
						width={300}
						height={300}
						priority
						style={{
							maxWidth: '100%',
							height: 'auto',
						}}
					/>
				</div>

				<h1 className="text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-semibold text-center text-white">
					Mister Vincent
				</h1>

				<ScrollToHashButton hash="contact" />
			</div>
		</div>
	);
};
