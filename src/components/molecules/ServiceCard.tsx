import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

type ServiceCardProps = {
	title: string;
	picture: StaticImport;
	content: string;
	href: string;
};

export const ServiceCard = ({
	title,
	picture,
	content,
	href,
}: ServiceCardProps) => {
	return (
		<div className="flex flex-col h-full bg-white rounded-xl p-5 w-full gap-5 shadow-2xl">
			<div className="flex flex-col w-full gap-5 h-full">
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

			<Link
				href={href}
				className="text-primary hover:text-primary_hover underline decoration-2 underline-offset-2"
			>
				En savoir plus
			</Link>
		</div>
	);
};
