'use client';

import { motion } from 'motion/react';
import { ProjectCard } from '@/components/ui/project-card';
import { projects } from '@/lib/data';
import { stagger, duration, ease } from '@/lib/motion';

const container = {
	hidden: {},
	show: { transition: { staggerChildren: stagger.base } },
};

const item = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } },
};

const cards = {
	hidden: {},
	show: { transition: { staggerChildren: stagger.base } },
};

// h1 takes its own stagger slot in `container` before the grid starts
const headerSteps = 1;
const gridOwnDelay = headerSteps * stagger.base;
const cardsDelay = gridOwnDelay + projects.length * stagger.base;

const descriptionItem = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out, delay: cardsDelay } },
};

export function Projects() {
	return (
		<section id="projects" className="flex min-h-screen flex-col items-center py-24">
			<motion.div
				className="container flex flex-col justify-between gap-16 flex-1"
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={container}>
				<div className="flex flex-col gap-16">
					<div className="flex flex-col gap-4">
						<motion.h1 className="max-w-160 text-5xl font-bold" variants={item}>
							Six projects, six different hard problems.
						</motion.h1>
					</div>

					<motion.div className="grid grid-cols-1 gap-6 md:grid-cols-3" variants={cards}>
						{projects.map((project, index) => (
							<motion.div key={project.id} variants={item}>
								<ProjectCard project={project} index={index} />
							</motion.div>
						))}
					</motion.div>
				</div>
				<motion.div className="flex flex-col gap-5" variants={descriptionItem}>
					<hr className="border-border-hairline" />
					<span className="hud-label text-center">That's the work so far — six shipped, more in progress</span>
				</motion.div>
			</motion.div>
		</section>
	);
}
