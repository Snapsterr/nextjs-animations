'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { cn } from 'tailwind-variants';

const Scene = dynamic(() => import('./r3f-gemstone-scene'), { ssr: false });

interface R3FGemstoneProps {
	className?: string;
}

export function R3FGemstone({ className }: R3FGemstoneProps) {
	return (
		<div className={cn('absolute -z-1 pointer-events-none lg:block', className)} aria-hidden="true">
			<div className="absolute -z-1 inset-[-20%] rounded-full bg-accent/10 blur-3xl" />
			<Suspense fallback={null}>
				<Scene />
			</Suspense>
		</div>
	);
}
