'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

type GoToHashButtonProps = {
	hash: string;
};

export const GoToHashButton = ({ hash }: GoToHashButtonProps) => {
	const router = useRouter();

	return (
		<button
			className="bg-primary text-white px-5 py-3 rounded-full mt-10 mb-20 text-white hover:bg-primary_hover"
			onClick={() => router.push(`/#${hash}`)}
		>
			Contactez-moi
		</button>
	);
};
