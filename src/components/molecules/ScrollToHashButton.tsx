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
			className="rounded-full bg-[#c6d200] text-white transition ease-in-out delay-100 hover:bg-[#B1BB00] px-5 py-3"
			onClick={() => scrolltoHash(hash)}
		>
			Contactez-moi
		</button>
	);
};
