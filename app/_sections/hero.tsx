'use client';

import { motion } from 'motion/react';
import { stagger } from '@/lib/motion';
import { profile } from '@/lib/data';
import { StaggerItem, StaggerList } from '@/components/stagger-list';
import { useScrambleText } from '@/hooks/use-scramble-text';

const container = {
	hidden: {},
	show: { transition: { staggerChildren: stagger.base } },
};

const taglineWords = profile.tagline.split(' ');

export function Hero() {
	const scrambledName = useScrambleText(profile.name);
	const scrambledLocationAvailability = useScrambleText(
		`${profile.location.city}, ${profile.location.countryCode} · ${profile.availability.short}`,
	);

	return (
		<section id="intro" className="flex min-h-[calc(100vh-4rem-1px)] justify-center relative">
			<div className="absolute inset-0 bg-gradient-grid bg-repeat user-select-none pointer-events-none" />
			<div className="absolute top-42 left-82 w-14 h-14 rounded-md bg-surface-2 border border-border-hairline shadow-shape -rotate-8 -z-1 user-select-none pointer-events-none -z-1" />
			<div className="absolute top-128 right-73 w-14 h-14 rounded-md bg-surface-2 border border-border-hairline shadow-shape rotate-14 -z-1 user-select-none pointer-events-none -z-1" />
			<div className="absolute top-24 right-89 w-10 h-10 rounded-full bg-surface-2 shadow-shape user-select-none pointer-events-none -z-1" />
			<div className="absolute top-27 left-1/2 -translate-x-1/2 w-130 h-130 rounded-full shadow-radial bg-accent/6">
				<div className="absolute top-[14%] left-[22%] w-[32%] h-[22%] rounded-full bg-white/35 blur-[22px]" />
			</div>

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
					<StaggerItem className="flex self-end max-w-240 pb-50">
						<StaggerList className="text-8xl font-bold" step={stagger.tight} nested={true} as="p" aria-label={profile.tagline}>
							{taglineWords.map((taglineWord, i) => (
								<StaggerItem key={i} className="inline-block not-last-of-type:mr-[0.15em]" as="span" aria-hidden={true}>
									{taglineWord}
								</StaggerItem>
							))}
						</StaggerList>
					</StaggerItem>
				</div>
			</motion.div>
		</section>
	);
}
