import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/mister-vincent-logo-white.webp';

export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-row items-center justify-center mt-[100px] w-screen">
			<div className="flex flex-row items-center justify-between fixed w-full bg-black top-0 left-0 px-10 py-5 z-50">
				<Link href="/">
					<Image
						src={logo}
						alt="Logo Mister Vincent"
						width={60}
						height={60}
						style={{
							maxWidth: '100%',
							height: 'auto',
						}}
					/>
				</Link>
				<Link href="/" className="text-white text-xs">
					Retour à l'accueil
				</Link>
			</div>
			{children}
		</div>
	);
}
