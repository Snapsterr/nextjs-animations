'use client';

import { motion } from 'motion/react';
import { duration, ease } from '@/lib/motion';

export function TimelineLine() {
	return (
		<motion.div
			className="absolute top-0 left-0 h-full w-px origin-top bg-border-hairline"
			initial={{ scaleY: 0 }}
			whileInView={{ scaleY: 1 }}
			viewport={{ once: true }}
			transition={{ duration: duration.slow, ease: ease.out }}
		/>
	);
}
