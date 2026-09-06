import { tv } from 'tailwind-variants';

export const coverVariants = ['accent', 'warn', 'neutral'] as const;
export type CoverVariant = (typeof coverVariants)[number];

const cover = tv({
	base: 'group-hover:shadow-hairline-accent relative overflow-hidden rounded-md shadow-hairline transition-shadow',
	variants: {
		variant: {
			accent: 'bg-gradient-cover-accent',
			warn: 'bg-gradient-cover-warn',
			neutral: 'bg-gradient-cover-neutral',
		},
		size: {
			sm: 'h-55',
			lg: 'h-110',
		},
	},
	defaultVariants: {
		variant: 'accent',
		size: 'sm',
	},
});

const mark = tv({
	base: 'absolute font-bold leading-none text-ink/[0.14]',
	variants: {
		size: {
			sm: '-bottom-4 right-3 text-[140px]',
			lg: '-bottom-10 right-8 text-[340px]',
		},
	},
	defaultVariants: {
		size: 'sm',
	},
});

interface ProjectCoverProps {
	letter: string;
	variant?: CoverVariant;
	size?: 'sm' | 'lg';
}

export function ProjectCover({ letter, variant, size }: ProjectCoverProps) {
	return (
		<div className={cover({ variant, size })}>
			<span className={mark({ size })}>{letter}</span>
		</div>
	);
}
