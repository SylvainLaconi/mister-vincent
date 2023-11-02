import Image from 'next/image';
import * as React from 'react';
import portrait from '../../../public/mister-vincent-portrait.webp';

export const IntroductionSection = () => {
	return (
		<div className="w-screen py-20 px-5 flex flex-col items-center justify-center">
			<div className="flex flex-col w-full max-w-5xl gap-10">
				<h2 className="text-2xl text-center text-black lg:text-4xl xl:text-4xl 2xl:text-4xl">
					Je vous accompage pour{' '}
					<strong className="font-semibold text-[#c6d200]">ranger</strong>,{' '}
					<strong className="font-semibold text-[#c6d200]">trier</strong> et{' '}
					<strong className="font-semibold text-[#c6d200]">désemcombrer</strong>
				</h2>
				<div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center gap-10">
					<div className="w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
						<Image
							src={portrait}
							alt="Portrait Mister Vincent"
							width={328}
							height={410}
							style={{ borderRadius: '12px', width: '100%', height: 'auto' }}
						/>
					</div>
					<div className="flex flex-col w-full lg:w-2/3 xl:w-2/3 2xl:w-2/3 gap-5 items-start justify-center">
						<p className="text-black leading-loose text-justify">
							Je suis Vincent, Home Organiser passionné par l'optimisation
							d'espaces.
						</p>

						<p className="text-black leading-loose text-justify">
							Avec un passé de 5 ans dans les Chasseurs Alpins et 20 ans de
							management dans la grande distribution, j'ai acquis
							l'adaptabilité, la discipline et le sens des priorités. Je suis
							calme, honnête et à l'écoute de vos besoins. Le rangement, le tri
							et l'optimisation sont pour moi une seconde nature. À la maison,
							je vis dans un espace vivant, mais rangé.
						</p>
						<p className="text-black leading-loose text-justify">
							Ensemble, nous trierons, rangerons et trouverons des solutions sur
							mesure pour votre espace. Mon objectif est de vous aider à vivre
							dans un environnement qui vous ressemble, en toute confiance et
							sans imposer mon point de vue.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
