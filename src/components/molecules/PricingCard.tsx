import * as React from 'react';
import { ScrollToHashButton } from './ScrollToHashButton';

type PricingCardProps = {
	title: string;
	price: number;
	unit: string;
	variant?: boolean;
};

export const PricingCard = ({
	title,
	price,
	unit,
	variant = false,
}: PricingCardProps) => {
	return (
		<div
			className={`flex flex-col rounded-xl px-[50px] py-[50px] justify-between gap-5 h-[300px] w-full shadow-2xl ${
				variant ? 'bg-primary text-white' : 'bg-white'
			}"}`}
		>
			<h4
				className={`w-full text-center ${
					variant ? 'text-white' : 'text-black'
				}`}
			>
				{title}
			</h4>

			<div className="w-full">
				<p
					className={`w-full text-center text-6xl ${
						variant ? 'text-white' : 'text-primary'
					}`}
				>{`${price}€`}</p>
				<p
					className={`w-full text-center ${
						variant ? 'text-white' : 'text-primary'
					}`}
				>
					{unit}
				</p>
			</div>

			<ScrollToHashButton variant={variant} hash="contact" />
		</div>
	);
};
