import dynamic from 'next/dynamic';
import { cn } from 'tailwind-variants';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

interface SplineGemstoneProps {
	scene: string;
	className?: string;
}

export function SplineGemstone({ scene, className }: SplineGemstoneProps) {
	return (
		<div
			className={cn(
				'absolute -z-1 pointer-events-none lg:block [&_canvas]:w-full! [&_canvas]:h-full! [&_canvas]:object-contain',
				className,
			)}
			aria-hidden="true">
			<Spline
				scene={scene}
				className="w-full h-full"
				onLoad={() => requestAnimationFrame(() => window.dispatchEvent(new Event('resize')))}
			/>
		</div>
	);
}
