import Image from 'next/image';
import * as React from 'react';
import logo from '../../../public/mister-vincent-logo-white.webp';
import heroImage from '../../../public/mister-vincent-hero3.webp';
import { ScrollToHashButton } from '../molecules/ScrollToHashButton';
// import { AiFillDownCircle } from 'react-icons/ai';

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
			<div className="flex flex-col items-center justify-center p-10 gap-4 lg:gap-10 xl:gap-10 2xl:gap-10 z-0 h-full">
				<div className="flex place-items-center w-[200px] lg:w-auto">
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

				<h1 className="text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-semibold text-center text-white animate-[fade-in-down_0.5s_ease-in-out]">
					Mister Vincent
				</h1>

				<h2 className="lg:text-xl text-center text-white animate-[fade-in-down_1s_ease-in-out]">
					Home Organiser - Office Organiser - Death Cleaner | Lyon et alentours
				</h2>

				<div className="animate-[fade-in-down_1.5s_ease-in-out]">
					<ScrollToHashButton variant={false} hash="contact" />
				</div>
			</div>
			{/* <div className="relative bottom-10 color-primary animate-bounce animate-delay-2000">
				<AiFillDownCircle size={'3rem'} color={'#c6d200'} />
			</div> */}
		</div>
	);
};
