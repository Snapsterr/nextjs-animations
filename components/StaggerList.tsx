'use client';

import { motion } from 'motion/react';
import { duration, ease, stagger } from '@/lib/motion';

type StaggerListTag = 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'hr';

interface StaggerListProps {
	children: React.ReactNode;
	className?: string;
	step?: number;
	selfFade?: boolean;
	/** Set when nesting this StaggerList inside another StaggerList/StaggerItem — skips its own
	 * viewport trigger so it inherits the "show" state (and its delay slot) from the ancestor instead
	 * of animating independently as soon as it's on screen. */
	nested?: boolean;
}

export function StaggerList({ children, className, step = stagger.base, selfFade = false, nested = false }: StaggerListProps) {
	const container = selfFade
		? {
				hidden: { opacity: 0, y: 16 },
				show: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out, staggerChildren: step } },
		  }
		: {
				hidden: {},
				show: { transition: { staggerChildren: step } },
		  };

	const trigger = nested ? {} : { initial: 'hidden' as const, whileInView: 'show' as const, viewport: { once: true } };

	return (
		<motion.div {...trigger} variants={container} className={className}>
			{children}
		</motion.div>
	);
}

export const staggerItem = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } },
};

interface StaggerItemProps {
	children?: React.ReactNode;
	className?: string;
	as?: StaggerListTag;
}

export function StaggerItem({ children, className, as = 'div' }: StaggerItemProps) {
	const Tag = motion[as];
	return (
		<Tag variants={staggerItem} className={className}>
			{children}
		</Tag>
	);
}
