'use client';

import { motion } from 'motion/react';
import { profile } from '@/lib/data';
import { ExperienceItem } from '@/components/ui/experience-item';
import { Button } from '@/components/ui/button';
import { stagger, duration, ease } from '@/lib/motion';

const container = {
	hidden: {},
	show: { transition: { staggerChildren: stagger.base } },
};

const item = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } },
};

const timeline = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out, staggerChildren: stagger.base } },
};

// span (02 — Experience) and h2 each take their own stagger slot in `container` before the timeline block starts
const headerSteps = 2;
const timelineOwnDelay = headerSteps * stagger.base;
const timelineButtonDelay = timelineOwnDelay + profile.timeline.length * stagger.base;

const timelineButtonItem = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out, delay: timelineButtonDelay } },
};

export function Experience() {
	return (
		<section id="experience" className="flex min-h-[calc(100vh-4rem-1px)] flex-col justify-center items-center py-24">
			<motion.div
				className="container flex flex-1 flex-col justify-center gap-16"
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={container}>
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<motion.span className="hud-label" variants={item}>
							02 — Experience
						</motion.span>
						<motion.h2 className="text-3xl font-bold" variants={item}>
							Where I&apos;ve worked.
						</motion.h2>
					</div>

					<motion.div
						className="flex flex-col divide-y divide-border-hairline border-y border-border-hairline"
						variants={timeline}>
						{profile.timeline.map((entry) => (
							<motion.div key={entry.id} variants={item}>
								<ExperienceItem period={entry.period} role={entry.role} org={entry.org} description={entry.description} />
							</motion.div>
						))}
					</motion.div>
				</div>

				<motion.div className="flex justify-between items-center" variants={timelineButtonItem}>
					<span className="hud-label">
						{profile.timeline.length} teams · {profile.startYear} — Present
					</span>
					<Button href="/work" variant="secondary" size="sm">
						View the work
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
}
