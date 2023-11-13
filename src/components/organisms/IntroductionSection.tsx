import Image from 'next/image';
import * as React from 'react';
import portrait from '../../../public/mister-vincent-portrait.webp';

export const IntroductionSection = () => {
	return (
		<div className="w-screen py-20 px-5 flex flex-col items-center justify-center">
			<div className="flex flex-col w-full max-w-5xl gap-10">
				<h2 className="text-2xl text-center text-black lg:text-4xl xl:text-4xl 2xl:text-4xl">
					Je vous accompage pour{' '}
					<strong className="font-semibold text-primary">ranger</strong>,{' '}
					<strong className="font-semibold text-primary">trier</strong> et{' '}
					<strong className="font-semibold text-primary">désencombrer</strong>
				</h2>
				<div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center gap-10">
					<div className="w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
						<Image
							src={portrait}
							alt="Portrait Mister Vincent"
							width={328}
							height={410}
							style={{
								borderRadius: '12px',
								width: '100%',
								height: 'auto',
								maxWidth: '100%',
								backgroundColor: 'transparent',
								boxShadow:
									'0 0 #0000, 0 0 #0000,0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
							}}
						/>
					</div>
					<div className="flex flex-col w-full lg:w-2/3 xl:w-2/3 2xl:w-2/3 gap-5 items-start justify-center">
						<p className="text-black leading-loose text-justify">
							Je suis Vincent, Home Organiser passionné par l'optimisation et le
							rangement depuis toujours ! C'est une seconde nature. À la maison,
							je vis dans un espace vivant, mais rangé !
						</p>

						<p className="text-black leading-loose text-justify">
							Avec un passé de 5 ans dans les Chasseurs Alpins et 20 ans de
							management dans la grande distribution, j'ai acquis
							l'adaptabilité, la discipline et le sens des priorités. Je suis
							calme, honnête et à l'écoute de vos besoins et de vos contraintes.
						</p>
						<p className="text-black leading-loose text-justify">
							Que ce soit seul, avec vous ou via une séance de coaching, mon
							objectif est de vous aider à prendre ou reprendre possession de
							vos espaces de vie ou de travail afin que vous vous y sentiez
							bien, en adaptant les solutions de rangement à vos désirs.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
