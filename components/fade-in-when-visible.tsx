'use client';

import { motion } from 'motion/react';
import { duration as durationConfig, ease } from '@/lib/motion';

type FadeInWhenVisibleTag = 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'hr';

interface FadeInWhenVisibleProps {
	children?: React.ReactNode;
	className?: string;
	delay?: number;
	y?: number;
	as?: FadeInWhenVisibleTag;
	duration?: number;
}

export function FadeInWhenVisible({
	children,
	className,
	duration = durationConfig.base,
	delay = 0,
	y = 16,
	as = 'div',
}: FadeInWhenVisibleProps) {
	const Tag = motion[as];

	return (
		<Tag
			className={className}
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration, ease: ease.out, delay }}>
			{children}
		</Tag>
	);
}
