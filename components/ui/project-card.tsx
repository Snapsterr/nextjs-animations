import Link from 'next/link';
import type { Project } from '@/lib/data';
import { Badge } from './badge';
import { ProjectCover, coverVariants } from './project-cover';

interface ProjectCardProps {
	project: Project;
	index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
	const variant = coverVariants[index % coverVariants.length];

	return (
		<Link href={`/work/${project.slug}`} className="group flex flex-col">
			<ProjectCover letter={project.title[0]} variant={variant} />

			<div className="flex flex-col gap-2.5 pt-5">
				<span className="hud-label">{project.category}</span>
				<h3 className="text-2xl font-semibold transition-colors group-hover:text-accent">{project.title}</h3>
				<p className="text-sm leading-relaxed text-muted">{project.tagline}</p>
			</div>

			<div className="mt-4 flex flex-wrap items-center gap-2">
				<span className="hud-label">{project.year}</span>
				{project.tags.map((tag) => (
					<Badge key={tag}>{tag}</Badge>
				))}
			</div>
		</Link>
	);
}
