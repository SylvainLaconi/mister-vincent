import { Service } from '@/types/service.type';
import Image from 'next/image';
import * as React from 'react';

type ServiceCardProps = {
	service: Service;
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
	return (
		<div className="flex flex-col bg-white rounded-xl p-5 w-full gap-5">
			<Image
				src={service.picture}
				alt={service.title}
				width={300}
				height={200}
				style={{ borderRadius: '12px', width: '100%' }}
			/>
			<h3 className="text-2xl text-[#c6d200]">{service.title}</h3>
			<p className="text-lg text-black leading-loose">{service.content}</p>
		</div>
	);
};
