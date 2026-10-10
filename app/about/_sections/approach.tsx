'use client';

import { useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';
import { FracturedCore } from '@/components/fractured-core';
import { StaggerItem, StaggerList } from '@/components/stagger-list';

export function Approach() {
	const pinRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({ target: pinRef, offset: ['start start', 'end end'] });
	const explodeProgress = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

	return (
		<section id="approach" ref={pinRef} className="relative h-[200vh]">
			<div className="sticky top-16 flex h-[calc(100vh-4rem-1px)] flex-col items-center gap-4 overflow-hidden py-12">
				<StaggerList className="container flex flex-col items-center gap-3 text-center" selfFade={true}>
					<StaggerItem className="hud-label" as="span">
						03 — Approach
					</StaggerItem>
					<StaggerItem className="max-w-160 text-3xl font-bold" as="h2">
						Complex systems, broken down to parts that make sense on their own.
					</StaggerItem>
				</StaggerList>

				<FracturedCore progress={explodeProgress} className="w-full flex-1" />
			</div>
		</section>
	);
}
