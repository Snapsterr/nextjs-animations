'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import type { Project } from '@/lib/data';
import { ProjectCover, type CoverVariant } from '@/components/ui/project-cover';
import { Badge } from '@/components/ui/badge';
import { stagger, duration, ease } from '@/lib/motion';

const container = {
	hidden: {},
	show: { transition: { staggerChildren: stagger.base } },
};

const item = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } },
};

interface ProjectDetailProps {
	project: Project;
	next: Project;
	variant: CoverVariant;
}

export function ProjectDetail({ project, next, variant }: ProjectDetailProps) {
	return (
		<section className="flex flex-col items-center pt-20">
			<motion.div
				className="container flex flex-col"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}>
				<motion.span variants={item}>
					<Link
						href="/work"
						className="mb-14 inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-accent">
						← All work
					</Link>
				</motion.span>

				<motion.div className="mb-12 flex max-w-200 flex-col gap-5" variants={item}>
					<span className="hud-label">
						{project.year} — {project.category}
					</span>
					<h1 className="text-7xl font-bold">{project.title}</h1>
					<p className="max-w-170 text-xl text-muted">{project.tagline}</p>
				</motion.div>

				<motion.div className="mb-14 flex border-y hairline py-8" variants={item}>
					<div className="flex-1 pr-8">
						<span className="hud-label">Year</span>
						<p className="mt-2 text-base">{project.year}</p>
					</div>
					<div className="flex-1 border-l hairline px-8">
						<span className="hud-label">Category</span>
						<p className="mt-2 text-base">{project.category}</p>
					</div>
					<div className="flex-[2] border-l hairline pl-8">
						<span className="hud-label">Stack</span>
						<motion.div className="mt-2.5 flex flex-wrap gap-2" variants={container}>
							{project.tags.map((tag) => (
								<motion.span key={tag} variants={item}>
									<Badge>{tag}</Badge>
								</motion.span>
							))}
						</motion.div>
					</div>
				</motion.div>

				<motion.div className="mb-24" variants={item}>
					<ProjectCover letter={project.title[0]} variant={variant} size="lg" />
				</motion.div>

				<motion.div className="mb-24 flex max-w-170 flex-col gap-4" variants={item}>
					<span className="hud-label">Overview</span>
					<p className="text-lg leading-relaxed">{project.description}</p>
				</motion.div>

				<motion.hr className="border-t hairline" variants={item} />

				<motion.div className="w-fit" variants={item}>
					<Link href={`/work/${next.slug}`} className="group flex flex-col gap-4 my-10">
						<span className="hud-label">Next project</span>
						<div className="flex flex-wrap items-baseline gap-4">
							<span className="text-3xl font-bold transition-colors group-hover:text-accent">{next.title}</span>
							<span className="text-sm text-muted">{next.tagline} →</span>
						</div>
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
}
