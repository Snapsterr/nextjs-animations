import Link from 'next/link';
import { tv } from 'tailwind-variants';
import type { Project } from '@/lib/data';

const cover = tv({
	base: 'relative h-55 overflow-hidden rounded-md border hairline transition-colors group-hover:border-accent',
	variants: {
		variant: {
			accent: 'bg-[linear-gradient(150deg,#2a2060_0%,var(--accent)_100%)]',
			warn: 'bg-[linear-gradient(150deg,#3a2015_0%,var(--warn)_100%)]',
			neutral: 'bg-[linear-gradient(150deg,#1c1c20_0%,#131316_100%)] border-t-2 border-t-accent',
		},
	},
	defaultVariants: {
		variant: 'accent',
	},
});

const coverVariants = ['accent', 'warn', 'neutral'] as const;

interface ProjectCardProps {
	project: Project;
	index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
	const variant = coverVariants[index % coverVariants.length];

	return (
		<Link href={`/work/${project.slug}`} className="group flex flex-col">
			<div className={cover({ variant })}>
				<span className="absolute -bottom-4 right-3 text-[140px] leading-none font-bold text-ink/[0.14]">
					{project.title[0]}
				</span>
			</div>

			<div className="flex flex-col gap-2.5 pt-5">
				<span className="hud-label">{project.category}</span>
				<h3 className="text-2xl font-semibold transition-colors group-hover:text-accent">{project.title}</h3>
				<p className="text-sm leading-relaxed text-muted">{project.tagline}</p>
			</div>

			<div className="mt-4 flex flex-wrap items-center gap-2">
				<span className="hud-label">{project.year}</span>
				{project.tags.map((tag) => (
					<span key={tag} className="hud-label rounded-full border hairline px-2 py-1">
						{tag}
					</span>
				))}
			</div>
		</Link>
	);
}
