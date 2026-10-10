'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import type { MotionValue } from 'motion/react';
import { cn } from 'tailwind-variants';

const Scene = dynamic(() => import('./fractured-core-scene'), { ssr: false });

interface FracturedCoreProps {
	progress: MotionValue<number>;
	className?: string;
}

export function FracturedCore({ progress, className }: FracturedCoreProps) {
	return (
		<div className={cn('pointer-events-none', className)} aria-hidden="true">
			<Suspense fallback={null}>
				<Scene progress={progress} />
			</Suspense>
		</div>
	);
}
