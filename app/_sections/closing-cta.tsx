'use client';

import { motion } from 'motion/react';
import { profile } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { duration, ease, stagger } from '@/lib/motion';

interface ClosingCtaProps {
	eyebrow?: string;
}

const parent = {
	hidden: {},
	show: { transition: { staggerChildren: stagger.base } },
};

const item = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } },
};

export function ClosingCta({ eyebrow = '03 — Get in touch' }: ClosingCtaProps) {
	return (
		<section id="contact" className="flex min-h-[80vh] flex-col justify-center items-center py-24">
			<div className="container flex flex-1 flex-col justify-center gap-16">
				<motion.div
					className="flex flex-col gap-8 justify-center items-center"
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={parent}>
					{eyebrow && (
						<motion.span className="hud-label" variants={item}>
							{eyebrow}
						</motion.span>
					)}
					<motion.h2 className="max-w-200 text-6xl font-bold text-center" variants={item}>
						Have something reliable to build? Let&apos;s talk.
					</motion.h2>
					<motion.div className="flex flex-wrap items-center gap-4" variants={item}>
						<Button href={`mailto:${profile.email}`} variant="primary">
							Mail me
						</Button>
						<Button href="/work" variant="secondary">
							View Work
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
