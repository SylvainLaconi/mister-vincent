import PageLayout from '@/components/layouts/PageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Mister Vincent | Death-Cleaner à Lyon',
	description:
		"Lyon et alentours - Ensemble nous ferons le grand tri afin d'alléger cette tâche pour vos héritiers, et nous rangerons pour votre confort d'aujourd'hui.",
	alternates: {
		canonical: 'https://www.mister-vincent.fr',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <PageLayout>{children}</PageLayout>;
}
