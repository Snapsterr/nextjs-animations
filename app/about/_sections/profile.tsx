'use client';

import { motion } from 'motion/react';
import { profile, projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Stat } from '@/components/ui/stat';
import { duration, ease, stagger } from '@/lib/motion';

const container = {
	hidden: {},
	show: { transition: { staggerChildren: stagger.base } },
};

const skills = {
	hidden: {},
	show: { transition: { staggerChildren: stagger.base } },
};

const item = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } },
};

export function Profile() {
	const yearsWriting = new Date().getFullYear() - profile.startYear;

	return (
		<section id="profile" className="flex min-h-[calc(100vh-4rem-1px)] flex-col justify-center items-center py-24">
			<motion.div
				className="container flex flex-1 flex-col justify-center gap-16"
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={container}>
				<div className="flex flex-col gap-20 flex-1">
					<div className="flex justify-between items-start gap-16">
						<motion.div className="flex flex-[1.6] min-w-0 flex-col gap-6" variants={item}>
							<div className="flex flex-col gap-4">
								<span className="hud-label">01 — Profile</span>
								<h1 className="text-5xl font-bold">Software engineer, based in Lisbon.</h1>
							</div>
							<div className="flex max-w-130 flex-col gap-5">
								{profile.bio.map((bio, index) => (
									<p key={index} className="text-muted">
										{bio}
									</p>
								))}
							</div>
						</motion.div>

						<motion.div className="flex min-w-70 flex-1 flex-col gap-8 border-l hairline pl-12" variants={item}>
							<div className="flex flex-col gap-1.5">
								<span className="hud-label">Profile</span>
								<span className="mt-1.5 text-xl font-semibold">{profile.name}</span>
								<span className="text-sm text-muted">{profile.role}</span>
								<span className="hud-label mt-2.5">{profile.location}</span>
								<span className="hud-label">{profile.email}</span>
							</div>
							<motion.div
								className="flex flex-col gap-3"
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}
								variants={skills}>
								<motion.span className="hud-label" variants={item}>
									Skills
								</motion.span>
								<div className="flex flex-wrap gap-2">
									{profile.skills.map((skill) => (
										<motion.div key={skill} variants={item}>
											<Badge>{skill}</Badge>
										</motion.div>
									))}
								</div>
							</motion.div>
						</motion.div>
					</div>

					<motion.hr className="border-border-hairline" variants={item} />

					<motion.div className="flex" variants={item}>
						<div className="flex-1 pr-8">
							<Stat value={String(projects.length)} label="Shipped projects" />
						</div>
						<div className="flex-1 border-l hairline px-8">
							<Stat value={`${yearsWriting}+`} label="Years writing software" />
						</div>
						<div className="flex-1 border-l hairline pl-8">
							<Stat value={String(profile.timeline.length)} label="Teams worked with" />
						</div>
					</motion.div>
				</div>
				<motion.div className="flex justify-between items-center" variants={item}>
					<div className="flex gap-2 items-center">
						<span className="bg-accent rounded-full w-2 h-2"></span>
						<span className="hud-label">{profile.availability}</span>
					</div>
					<span className="hud-label">Experience next ↓</span>
				</motion.div>
			</motion.div>
		</section>
	);
}
