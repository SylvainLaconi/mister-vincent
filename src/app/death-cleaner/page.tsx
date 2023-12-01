import Image from 'next/image';
import * as React from 'react';
import heroImage from '../../../public/mister-vincent-hero3.webp';
import deathCleanerImage from '../../../public/couple-seniors.webp';
import { GoToHashButton } from '@/components/molecules/GoToHashButton';

export default function DeathCleaner() {
	return (
		<div className="flex flex-col w-full items-center">
			<div className="flex flex-col w-full h-[400px] relative items-center justify-center">
				<Image
					src={heroImage}
					alt="Home Organiser hero"
					sizes="100vw 400"
					fill
					style={{
						zIndex: -1,
						objectFit: 'cover',
						objectPosition: 'center',
					}}
				/>
				<h1 className="text-white text-4xl md:text-7xl font-semibold text-center animate-[fade-in-down_1s_ease-in-out]">
					Death Cleaner
				</h1>
			</div>

			<div className="w-full py-20 px-5 max-w-5xl">
				<div className="flex w-full justify-center mb-10 md:flex-none md:w-auto md:float-right md:pl-10 md:mb-0 ">
					<Image
						src={deathCleanerImage}
						alt="Death Cleaner"
						width={400}
						style={{
							borderRadius: '12px',
							backgroundColor: 'transparent',
							boxShadow:
								'0 0 #0000, 0 0 #0000,0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
						}}
					/>
				</div>

				<h2 className="text-3xl mb-10">
					Accompagnement Serein :{' '}
					<strong className="font-semibold text-primary">
						Le Grand Rangement
					</strong>
				</h2>

				<p className="text-black leading-loose text-justify mb-10">
					Offrez-vous un nouveau départ en faisant place à la clarté et à
					l'organisation. Mon service de Death Cleaning vous accompagne dans la
					rationalisation et l'optimisation de votre espace de vie. En
					travaillant ensemble, nous créons un environnement ordonné et
					sécurisé, simplifiant votre quotidien et préparant sereinement
					l'avenir.
				</p>

				<h3 className="text-2xl mb-10">Tri et Transmission</h3>

				<p className="text-black leading-loose text-justify mb-10">
					Du tri méticuleux à la gestion des objets liés à vos souvenirs, je
					vous guide pour désencombrer votre foyer tout en conservant
					l'essentiel. Ensemble, nous préparons une transition douce pour vos
					proches, limitant ainsi ce fardeau émotionnel après votre départ.
				</p>

				<h3 className="text-2xl mb-10">Soutien Personnalisé</h3>

				<p className="text-black leading-loose text-justify mb-10">
					Au-delà du rangement physique, que ce soit pour mieux vivre au
					quotidien ou pour préparer votre départ, mon empathie me permet de
					vous offrir un soutien adapté pour aborder cette étape délicate. Mon
					objectif est de vous accompagner dans cette démarche avec respect et
					compréhension, pour créer un espace de vie harmonieux tout en
					soulageant vos proches de préoccupations futures.
				</p>

				<p className="text-black leading-loose text-justify mb-10">
					En organisant votre domicile aujourd’hui, votre foyer sera plus adapté
					à votre quotidien et vous faciliterez l'avenir de vos proches.
				</p>

				<p className="text-black leading-loose text-justify">
					Contactez-moi pour commencer cette démarche de Death Cleaning et
					offrir ainsi une transition en douceur pour vous et votre famille.
				</p>
			</div>

			<h2 className="text-2xl text-center text-black lg:text-4xl xl:text-4xl 2xl:text-4xl max-w-lg ">
				Envie de vous lancer ?{' '}
				<strong className="font-semibold text-primary">
					Contactez-moi maintenant !
				</strong>
			</h2>

			<GoToHashButton hash="contact" />
		</div>
	);
}
