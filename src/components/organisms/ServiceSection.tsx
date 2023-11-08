import * as React from 'react';
import { ServiceCard } from '../molecules/ServiceCard';
import coupleImage from '../../../public/couple-seniors.webp';
import houseImage from '../../../public/nettoyage-maison.webp';
import warehouseImage from '../../../public/entrepot.webp';

export const ServiceSection = () => {
	return (
		<div className="w-screen p-5 flex flex-col items-center justify-center">
			<div className="flex flex-col w-full max-w-5xl gap-10">
				<h2 className="text-2xl text-center text-black lg:text-4xl xl:text-4xl 2xl:text-4xl">
					Mes <strong className="font-semibold	text-[#c6d200]">services</strong>
				</h2>
				<div className="grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-full gap-10">
					<ServiceCard
						title="Home Organiser"
						picture={houseImage}
						content="Professionnel du rangement, j'améliore l'organisation de votre logement, afin de mieux circuler, gagner de la place et du temps, ou encore créer de nouveaux espaces."
					/>
					<ServiceCard
						title="Office Organiser"
						picture={warehouseImage}
						content="En me servant de mon expérience professionnelle du monde des entreprises, je vous aide à optimiser vos espaces afin de les rendre plus efficients, plus sécurisés et plus agréables."
					/>
					<ServiceCard
						title="Death Cleaner"
						picture={coupleImage}
						content="L’objectif d’un Death Cleaning est de rendre votre foyer plus sécurisé, plus fonctionnel et de vous sentir apaisé d'avoir évité à vos proches d’avoir eu à gérer certains désagréments après votre décès."
					/>
				</div>
			</div>
		</div>
	);
};
