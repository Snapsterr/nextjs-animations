'use client';

import { useRef } from 'react';
import { animate, motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'motion/react';

const BACKGROUND_COLORS = ['#0a0a0c', '#0e0e11', '#151119'];

interface AmbientBackgroundProps {
	children: React.ReactNode;
}

export function AmbientBackground({ children }: AmbientBackgroundProps) {
	const scopeRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: scopeRef });
	const targetColor = useTransform(scrollYProgress, [0, 0.5, 1], BACKGROUND_COLORS);

	const backgroundColor = useMotionValue(BACKGROUND_COLORS[0]);
	useMotionValueEvent(targetColor, 'change', (latest) => {
		animate(backgroundColor, latest, { duration: 0.6, ease: 'easeOut' });
	});

	return (
		<div ref={scopeRef} className="relative">
			<motion.div className="fixed inset-0 -z-10" style={{ backgroundColor }}>
				<div className="absolute inset-0 bg-gradient-grid bg-repeat user-select-none pointer-events-none" />

				<div className="absolute top-46 left-1/2 -translate-x-1/2 w-130 h-130 user-select-none pointer-events-none">
					<motion.div
						className="absolute inset-0 rounded-full shadow-radial overflow-hidden"
						style={{ backgroundColor }}
						animate={{ opacity: [0.85, 1, 0.85] }}
						transition={{
							duration: 9,
							repeat: Infinity,
							repeatType: 'mirror',
							ease: 'easeInOut',
						}}>
						<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,transparent_0%,rgba(0,0,0,0.4)_70%)]" />
						<div className="absolute top-[14%] left-[22%] w-[32%] h-[22%] rounded-full bg-white/35 blur-[22px]" />
					</motion.div>

					<motion.div
						className="absolute -top-2 -left-42 w-14 h-14 rounded-md bg-surface-2 border border-border-hairline shadow-shape -rotate-8 will-change-transform"
						animate={{
							y: [0, -20, 0],
							x: [0, 12, 0],
							rotate: [0, -10, 0],
						}}
						transition={{
							duration: 7,
							repeat: Infinity,
							repeatType: 'mirror',
							ease: 'easeInOut',
						}}
					/>
					<motion.div
						className="absolute -bottom-6 -right-30 w-14 h-14 rounded-md bg-surface-2 border border-border-hairline shadow-shape rotate-14 will-change-transform"
						animate={{
							y: [0, -10, 0],
							x: [0, 4, 0],
						}}
						transition={{
							duration: 9,
							delay: 1.5,
							repeat: Infinity,
							repeatType: 'mirror',
							ease: 'easeInOut',
						}}
					/>
					<motion.div
						className="absolute top-8 -right-52 w-10 h-10 rounded-full bg-surface-2 shadow-shape will-change-transform"
						animate={{
							y: [0, -14, 0],
							x: [0, -10, 0],
						}}
						transition={{
							duration: 6,
							delay: 0.8,
							repeat: Infinity,
							repeatType: 'mirror',
							ease: 'easeInOut',
						}}
					/>
				</div>
			</motion.div>

			{children}
		</div>
	);
}
