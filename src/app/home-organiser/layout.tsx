import PageLayout from '@/components/layouts/PageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Mister Vincent | Home-Organiser à Lyon',
	description:
		"Lyon et alentours - Avec ou sans vous, je désencombre et j'optimise vos espaces de vie dans votre foyer.",
	alternates: {
		canonical: 'https://www.mister-vincent.fr',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <PageLayout>{children}</PageLayout>;
}
