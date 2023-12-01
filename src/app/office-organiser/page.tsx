import Image from 'next/image';
import * as React from 'react';
import heroImage from '../../../public/mister-vincent-hero3.webp';
import officeImage from '../../../public/entrepot.webp';
import { GoToHashButton } from '@/components/molecules/GoToHashButton';

export default function OfficeOrganiser() {
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
					Office Organiser
				</h1>
			</div>

			<div className="w-full py-20 px-5 max-w-5xl">
				<div className="flex w-full justify-center mb-10 md:flex-none md:w-auto md:float-right md:pl-10 md:mb-0 ">
					<Image
						src={officeImage}
						alt="Office Organiser"
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
					Révolutionnez{' '}
					<strong className="font-semibold text-primary">
						Votre Espace de Travail
					</strong>
				</h2>

				<p className="text-black leading-loose text-justify mb-10">
					Plongez dans une nouvelle façon de travailler. Ensemble, nous
					repensons votre espace professionnel pour optimiser chaque coin. Après
					une analyse des flux de personnel et de matériel, j’adapte l’existant,
					et je propose des aménagements , vous permettant de travailler
					efficacement tout en donnant vie à un bureau qui inspire la
					productivité.
				</p>

				<h3 className="text-2xl mb-10">Plus d’efficience</h3>

				<p className="text-black leading-loose text-justify mb-10">
					Du tri initial à la mise en place de solutions de rangement adaptées à
					votre entreprise, je vous accompagne pour éliminer le superflu.
					Libérez de l'espace pour favoriser une atmosphère sereine, propice à
					des idées brillantes.
				</p>

				<h3 className="text-2xl mb-10">Plus de confort</h3>

				<p className="text-black leading-loose text-justify mb-10">
					Je ne me contente pas de désencombrer votre espace professionnel. Je
					vous fournis également les outils et les stratégies pour maintenir un
					environnement de travail organisé et aéré. Ensemble, nous façonnons un
					lieu où l'efficacité et la créativité se rencontrent harmonieusement.
				</p>

				<h3 className="text-2xl mb-10">Plus de sécurité</h3>

				<p className="text-black leading-loose text-justify mb-10">
					En reprenant le contrôle de vos espaces de travail, vous gagnerez en
					ergonomie, gage de sécurité.
				</p>

				<p className="text-black leading-loose text-justify">
					Transformez votre bureau en un espace qui favorise la productivité et
					le bien-être. Contactez-moi pour initier cette métamorphose de votre
					environnement professionnel.
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
