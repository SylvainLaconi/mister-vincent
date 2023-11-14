import * as React from 'react';
import { PricingCard } from '../molecules/PricingCard';
import { SectionLayout } from '../layouts/SectionLayout';

export const PricingSection = () => {
	return (
		<SectionLayout>
			<h2 className="text-2xl text-center text-black lg:text-4xl xl:text-4xl 2xl:text-4xl">
				Mes <strong className="font-semibold	text-primary">tarifs</strong>
			</h2>
			<div className="grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-full gap-10 flex-wrap">
				<PricingCard title="A l'heure" price={90} unit={"de l'heure"} />
				<PricingCard
					title="Demi-journée"
					price={290}
					unit={'pour 4 heures de travail'}
					variant
				/>
				<PricingCard
					title="Journée complète"
					unit={'pour 7 heures de travail'}
					price={490}
				/>
			</div>
		</SectionLayout>
	);
};
