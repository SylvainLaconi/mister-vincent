import Image from 'next/image';
import * as React from 'react';
import {
	BsFacebook,
	BsInstagram,
	BsPinterest,
	BsLinkedin,
	BsYoutube,
} from 'react-icons/bs';
import logo from '../../../public/mister-vincent-logo-white.webp';
import Link from 'next/link';

export const FooterSection = () => {
	return (
		<div className="bg-black text-white w-screen p-5 flex flex-col items-center justify-center">
			<div className="flex flex-col w-full max-w-5xl">
				<div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center">
					<div className="flex items-start w-full justify-center lg:justify-start xl:justify-start 2xl:justify-start">
						<Image
							src={logo}
							alt="Logo Mister Vincent"
							width={120}
							height={120}
							style={{
								maxWidth: '100%',
								height: 'auto',
							}}
						/>
					</div>
					<div className="flex flex-col w-full gap-5 p-5 text-center lg:text-start xl:text-start 2xl:text-start">
						<Link href="/cgu">Conditions générales d'utilisation</Link>
						<Link href="/mentions-legales">Mentions légales</Link>
					</div>
					<div className="flex flex-col w-full gap-2 p-5 text-center lg:text-start xl:text-start 2xl:text-start">
						<p>Mister Vincent</p>
						<p>Home organiser</p>
						<p></p>
						<p>www.mister-vincent.fr</p>
						<p>vincent@mister-vincent.fr</p>
						<p>+33 6 64 75 84 05</p>
					</div>
				</div>
				<div className="flex flex-row gap-5 justify-center w-full">
					<a
						href="https://www.facebook.com/profile.php?id=61553234074867"
						target="_blank"
					>
						<BsFacebook size={25} />
					</a>
					{/* <a href="https://www.instagram.com/" target="_blank">
						<BsInstagram size={25} />
					</a> */}
					<a href="https://www.pinterest.fr/MisterVincent69/" target="_blank">
						<BsPinterest size={25} />
					</a>
					<a
						href="https://www.linkedin.com/company/mister-vincent/about/?viewAsMember=true"
						target="_blank"
					>
						<BsLinkedin size={25} />
					</a>
					{/* <a href="https://www.youtube.com/" target="_blank">
						<BsYoutube size={25} />
					</a> */}
				</div>
				<p className="text-xs p-5 text-center">2023 @ TOUS DROITS RÉSERVÉS</p>
			</div>
		</div>
	);
};
