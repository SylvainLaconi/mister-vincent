import * as React from 'react';
import { ServiceCard } from '../molecules/ServiceCard';
import coupleImage from '../../../public/couple-seniors.webp';
import houseImage from '../../../public/nettoyage-maison.webp';
import warehouseImage from '../../../public/entrepot.webp';
import { SectionLayout } from '../layouts/SectionLayout';

export const ServiceSection = () => {
	return (
		<SectionLayout>
			<h2 className="text-2xl text-center text-black lg:text-4xl xl:text-4xl 2xl:text-4xl">
				Mes <strong className="font-semibold	text-primary">services</strong>
			</h2>
			<div className="grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-full gap-10">
				<ServiceCard
					title="Home Organiser"
					picture={houseImage}
					content="Avec ou sans vous, je désencombre et j'optimise vos espaces de vie dans votre foyer."
					href="/home-organiser"
				/>
				<ServiceCard
					title="Office Organiser"
					picture={warehouseImage}
					content="Je rends plus efficient et plus sécurisé vos zones de travail et de stockage pour votre bien-être et celui de vos équipes."
					href="/office-organiser"
				/>
				<ServiceCard
					title="Death Cleaner"
					picture={coupleImage}
					content="Ensemble nous ferons le grand tri afin d'alléger cette tâche pour vos héritiers, et nous rangerons pour votre confort d'aujourd'hui."
					href="/death-cleaner"
				/>
			</div>
		</SectionLayout>
	);
};
