'use client';

import * as React from 'react';

type ScrollToHashButtonProps = {
	hash: string;
	variant: boolean;
};

export const ScrollToHashButton = ({
	hash,
	variant,
}: ScrollToHashButtonProps) => {
	const scrolltoHash = function (element_id: string) {
		const element = document.getElementById(element_id);
		element?.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		});
	};

	return (
		<button
			className={`rounded-full transition ease-in-out delay-100 hover:bg-primary_hover px-5 py-3 ${
				variant
					? 'bg-white text-primary hover:bg-white_hover'
					: 'bg-primary text-white hover:bg-primary_hover'
			}`}
			onClick={() => scrolltoHash(hash)}
		>
			Contactez-moi
		</button>
	);
};
