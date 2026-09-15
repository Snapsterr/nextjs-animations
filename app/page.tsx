import { Hero } from '@/app/_sections/hero';
import { FeaturedWork } from '@/app/_sections/featured-work';
import { ClosingCta } from '@/app/_sections/closing-cta';
import { HudOverlay } from '@/components/hud-overlay';
import { homeSections, profile } from '@/lib/data';

export default function Home() {
	return (
		<>
			<Hero />
			<FeaturedWork />
			<ClosingCta />
			<HudOverlay sections={homeSections} coordinates={profile.location.coordinates} footerId="site-footer" />
		</>
	);
}
