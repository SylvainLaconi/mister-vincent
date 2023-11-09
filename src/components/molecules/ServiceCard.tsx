import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import * as React from 'react';

type ServiceCardProps = {
	title: string;
	picture: StaticImport;
	content: string;
};

export const ServiceCard = ({ title, picture, content }: ServiceCardProps) => {
	return (
		<div className="flex flex-col bg-white rounded-xl p-5 w-full gap-5">
			<Image
				src={picture}
				alt={title}
				width={300}
				height={200}
				style={{
					borderRadius: '12px',
					width: '100%',
					maxWidth: '100%',
					height: 'auto',
				}}
			/>
			<h3 className="text-2xl text-primary">{title}</h3>
			<p className="text-lg text-black leading-loose">{content}</p>
		</div>
	);
};
