import * as React from 'react';

type SectionLayoutProps = {
	children: React.ReactNode;
};

export const SectionLayout = ({ children }: SectionLayoutProps) => {
	return (
		<div className="w-screen py-10 px-5 flex flex-col items-center justify-center">
			<div className="flex flex-col w-full max-w-5xl gap-10">{children}</div>
		</div>
	);
};
