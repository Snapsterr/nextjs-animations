'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { stagger } from '@/lib/motion';
import { profile } from '@/lib/data';
import { StaggerItem, StaggerList } from '@/components/stagger-list';
import { useScrambleText } from '@/hooks/use-scramble-text';
import { SplineGemstone } from '@/components/spline-gemstone';

const container = {
	hidden: {},
	show: { transition: { staggerChildren: stagger.base } },
};

const taglineWords = profile.tagline.split(' ');

export function Hero() {
	const pinRef = useRef<HTMLElement>(null);

	const scrambledName = useScrambleText(profile.name);
	const scrambledLocationAvailability = useScrambleText(
		`${profile.location.city}, ${profile.location.countryCode} · ${profile.availability.short}`,
	);

	const { scrollYProgress } = useScroll({ target: pinRef, offset: ['start start', 'end end'] });
	const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
	const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	return (
		<section ref={pinRef} className="relative h-[200vh]">
			<motion.div
				id="intro"
				className="sticky top-16 flex h-[calc(100vh-4rem-1px)] justify-center relative"
				style={{ scale: heroScale, opacity: heroOpacity }}>
				<motion.div
					className="container w-full grid grid-rows-[auto_1fr_50] min-h-full py-24"
					initial="hidden"
					animate="show"
					variants={container}>
					<StaggerItem className="w-full flex justify-between">
						<div className="flex flex-col gap-1">
							<h1 className="text-5xl font-bold">{scrambledName}</h1>
							<span className="text-muted">{scrambledLocationAvailability}</span>
						</div>

						<div className="max-w-75">
							<p className="text-right text-muted">{profile.description}</p>
						</div>
					</StaggerItem>
					<div className="flex flex-1 items-center">
						<StaggerItem className="flex self-end max-w-240 pb-20">
							<StaggerList
								className="text-8xl font-bold"
								step={stagger.tight}
								nested={true}
								as="p"
								aria-label={profile.tagline}>
								{taglineWords.map((taglineWord, i) => (
									<StaggerItem key={i} className="inline-block not-last-of-type:mr-[0.15em]" as="span" aria-hidden={true}>
										{taglineWord}
									</StaggerItem>
								))}
							</StaggerList>
						</StaggerItem>
					</div>
				</motion.div>

				<SplineGemstone
					className="bottom-[36%] right-[8%] hidden w-[clamp(210px,20vw,260px)] aspect-2/3"
					scene="https://prod.spline.design/gvUOvv6uT79O6HHv/scene.splinecode"
				/>
			</motion.div>
		</section>
	);
}
