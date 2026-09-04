import { Hero } from '@/app/_sections/hero';
import { FeaturedWork } from '@/app/_sections/featured-work';
import { ClosingCta } from '@/app/_sections/closing-cta';

export default function Home() {
	return (
		<>
			<Hero />
			<FeaturedWork />
			<ClosingCta />
		</>
	);
}
