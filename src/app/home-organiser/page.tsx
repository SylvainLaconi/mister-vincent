import Image from 'next/image';
import * as React from 'react';
import heroImage from '../../../public/mister-vincent-hero3.webp';
import homeOrganiserImage from '../../../public/nettoyage-maison.webp';
import { GoToHashButton } from '@/components/molecules/GoToHashButton';

export default function HomeOrganiser() {
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
					Home Organiser
				</h1>
			</div>

			<div className="w-full py-20 px-5 max-w-5xl">
				<div className="flex w-full justify-center mb-10 md:flex-none md:w-auto md:float-right md:pl-10 md:mb-0 ">
					<Image
						src={homeOrganiserImage}
						alt="Home Organiser"
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
					Révélez le{' '}
					<strong className="font-semibold text-primary">Potentiel</strong> de{' '}
					<strong className="font-semibold text-primary">
						Votre Espace de Vie
					</strong>
				</h2>

				<p className="text-black leading-loose text-justify mb-10">
					Découvrez comment je peux transformer votre domicile en un sanctuaire
					organisé et fonctionnel. Ensemble, nous repensons l'aménagement pour
					maximiser chaque centimètre carré. Je crée des systèmes sur mesure
					pour simplifier votre quotidien, réduire le désordre et apporter une
					harmonie à votre espace de vie.
				</p>

				<h3 className="text-2xl mb-10">Désencombrement Personnalisé</h3>

				<p className="text-black leading-loose text-justify mb-10">
					Du tri initial à la création de solutions de rangement adaptées à
					votre style de vie, je vous guide à chaque étape. Nous éliminons
					l'encombrement pour libérer de l'espace physique et mental. Mon
					approche personnalisée vous aide à retrouver un foyer où il fait bon
					vivre.
				</p>

				<h3 className="text-2xl mb-10">Simplification de la Vie Quotidienne</h3>

				<p className="text-black leading-loose text-justify mb-10">
					Ma mission va au-delà de la création d'un espace organisé. Je vous
					offre des outils et des méthodes pour maintenir l'ordre durablement.
					Ensemble, nous créons un environnement propice à la détente, vous
					permettant de profiter pleinement de chaque instant sans le fardeau du
					désordre.
				</p>

				<p className="text-black leading-loose text-justify">
					Votre maison peut devenir un lieu de calme et de clarté. Contactez-moi
					pour entamer ce voyage vers un espace de vie transformé et
					épanouissant.
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
