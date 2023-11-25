import type { Metadata } from 'next';
import { Lexend_Deca } from 'next/font/google';
import './globals.css';

const lexendDeca = Lexend_Deca({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Mister Vincent | Home Organiser & Coach en rangement à Lyon',
	description:
		'Lyon et alentours - Home Organiser et Coach en rangement, je vous accompagne pour optimiser, transformer et organiser vos espaces de vie et de travail.',
	alternates: {
		canonical: 'https://www.mister-vincent.fr',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<body className={lexendDeca.className} cz-shortcut-listen="true">
				{children}
			</body>
		</html>
	);
}
