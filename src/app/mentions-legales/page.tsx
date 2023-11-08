import Image from 'next/image';
import * as React from 'react';

export default function MentionsLegales() {
	return (
		<div className="flex flex-col w-full items-center justify-center my-10">
			<div className="flex flex-col w-full gap-10 w-full max-w-5xl px-10">
				<h2 className="text-2xl text-center text-[#c6d200] lg:text-4xl xl:text-4xl 2xl:text-4xl">
					Mentions légales
				</h2>

				<div className="flex flex-col w-full gap-4">
					<h3 className="text-2xl text-[#c6d200]">Identité</h3>
					<p>Nom du site : MISTER VINCENT</p>
					<p>Adresse du site : https://www.mister-vincent.fr/</p>
					<p>Propriétaire : MISTER VINCENT</p>
					<p>SIRET : 98093144800016</p>
					<p>Forme juridique : Entrepreneur individuel</p>
					<p>Capital social : 0€</p>
					<p>
						Adresse du siège social : 40 RUE de Bruxelles 69100 Villeurbanne
						FRANCE
					</p>
				</div>

				<div className="flex flex-col w-full gap-4">
					<h3 className="text-2xl text-[#c6d200]">
						Responsable de la publication
					</h3>
					<p>Malordy Vincent / 0664758405 / vincent@mister-vincent.fr</p>
				</div>

				<div className="flex flex-col w-full gap-4">
					<h3 className="text-2xl text-[#c6d200]">Hébergement du site</h3>
					<p>
						Render Services, Inc. / 525 Brannan St Suite 300 San Francisco CA
						94107, États-Unis / 415-830-4762 /{' '}
						<a
							href="https://render.com"
							target="_blank"
							className="font-semibold underline"
						>
							https://render.com
						</a>
					</p>
				</div>
				<div className="flex flex-col w-full gap-4">
					<h3 className="text-2xl text-[#c6d200]">Crédits</h3>
					<p>
						<a
							href="https://www.pexels.com/fr-fr/photo/brouillon-de-dessin-constructeur-masculin-sur-rouleau-de-papier-3760529/"
							target="_blank"
						>
							Photo de Andrea Piacquadio
						</a>{' '}
						sur Pexels
					</p>

					<p>
						<a
							href="https://fr.freepik.com/photos-gratuite/femme-nettoyage-maison_2976038.htm#query=rangement&position=7&from_view=search&track=sph"
							target="_blank"
						>
							Image de rawpixel.com
						</a>{' '}
						sur Freepik
					</p>
					<p>
						<a
							href="https://fr.freepik.com/photos-gratuite/service-livraison-entrepot-vide-personne-dedans-plein-rangees-etageres-boites-carton-pret-pour-que-travailleurs-commencent-preparer-colis-interieur-usine-fabrication-industrie-lourde_43107818.htm#query=stockage&position=21&from_view=search&track=sph"
							target="_blank"
						>
							Image de DCStudio
						</a>{' '}
						sur Freepik
					</p>
					<p>
						<a
							href="https://fr.freepik.com/photos-gratuite/repos-ete_5402363.htm#query=retraite&position=15&from_view=search&track=sph"
							target="_blank"
						>
							Image de pressfoto
						</a>{' '}
						sur Freepik
					</p>
				</div>
			</div>
		</div>
	);
}
