'use client';

import * as React from 'react';

type ScrollToHashButtonProps = {
	hash: string;
};

export const ScrollToHashButton = ({ hash }: ScrollToHashButtonProps) => {
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
			className="rounded-full bg-primary text-white transition ease-in-out delay-100 hover:bg-primary_hover px-5 py-3"
			onClick={() => scrolltoHash(hash)}
		>
			Contactez-moi
		</button>
	);
};
