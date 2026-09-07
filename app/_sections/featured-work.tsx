'use client';

import { motion } from 'motion/react';
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { duration, ease, stagger } from '@/lib/motion';

const featuredProjects = projects.filter((project) => project.featured);

const container = {
	hidden: {},
	show: {},
};

const cards = {
	hidden: {},
	show: { transition: { staggerChildren: stagger.base } },
};

const item = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } },
};

const buttonDelay = featuredProjects.length * stagger.base;

const buttonItem = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: duration.fast, ease: ease.out, delay: buttonDelay } },
};

const labelItem = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: duration.fast, ease: ease.out, delay: duration.base } },
};

export function FeaturedWork() {
	return (
		<section id="work" className="flex min-h-screen flex-col items-center py-24">
			<div className="container flex flex-col justify-between gap-16 flex-1">
				<motion.div
					className="flex flex-col gap-16"
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={container}>
					<div className="flex flex-wrap items-end justify-between gap-8">
						<div className="flex flex-col gap-4">
							<motion.h2 className="max-w-160 text-5xl font-bold" variants={item}>
								Systems and products I&apos;ve built end to end.
							</motion.h2>
						</div>
						<motion.div variants={buttonItem}>
							<Button href="/work" variant="secondary" size="sm">
								View all work
							</Button>
						</motion.div>
					</div>

					<motion.div className="grid grid-cols-1 gap-6 md:grid-cols-3" variants={cards}>
						{featuredProjects.map((project, index) => (
							<motion.div key={project.id} variants={item}>
								<ProjectCard project={project} index={index} />
							</motion.div>
						))}
					</motion.div>
				</motion.div>
				<motion.div
					className="flex justify-center items-center"
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={labelItem}>
					<span className="hud-label">02 — Work</span>
				</motion.div>
			</div>
		</section>
	);
}
