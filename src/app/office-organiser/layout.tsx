import PageLayout from '@/components/layouts/PageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Mister Vincent | Office-Organiser à Lyon',
	description:
		'Lyon et alentours - Je rends plus efficient et plus sécurisé vos zones de travail et de stockage pour votre bien-être et celui de vos équipes.',
	alternates: {
		canonical: 'https://www.mister-vincent.fr',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <PageLayout>{children}</PageLayout>;
}
