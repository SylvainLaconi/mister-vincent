import * as React from 'react';
import servicesData from '../../data/services.json';
import { ServiceCard } from '../molecules/ServiceCard';

export const ServiceSection = () => {
	return (
		<div className="w-screen p-5 flex flex-col items-center justify-center">
			<div className="flex flex-col w-full max-w-5xl gap-10">
				<h2 className="text-2xl text-center text-black lg:text-4xl xl:text-4xl 2xl:text-4xl">
					Mes <strong className="font-semibold	text-[#c6d200]">services</strong>{' '}
					de home organiser
				</h2>
				<div className="grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-full gap-10">
					{servicesData.services.map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>
			</div>
		</div>
	);
};
