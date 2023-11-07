import { AchievementSection } from '@/components/organisms/AchievementSection';
import { ContactFormSection } from '@/components/organisms/ContactFormSection';
import { FooterSection } from '@/components/organisms/FooterSection';
import { HeroSection } from '@/components/organisms/HeroSection';
import { IntroductionSection } from '@/components/organisms/IntroductionSection';
import { PricingSection } from '@/components/organisms/PricingSection';
import { ServiceSection } from '@/components/organisms/ServiceSection';
import { SocialProofSection } from '@/components/organisms/SocialProofSection';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<HeroSection />
			<IntroductionSection />
			<ServiceSection />
			{/* <AchievementSection />
			<SocialProofSection />
			<PricingSection /> */}
			<ContactFormSection />
			<FooterSection />
		</main>
	);
}
