import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '@/lib/data';
import { ProjectCover, coverVariants } from '@/components/ui/project-cover';
import { Badge } from '@/components/ui/badge';
import { ClosingCta } from '@/app/_sections/closing-cta';

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;

	const project = projects.find((project) => project.slug === slug);

	if (!project) {
		return {
			title: 'Project not found',
			description: 'Project not found',
		};
	}

	return {
		title: `John Doe - ${project.title}`,
		description: project.description,
	};
}

export default async function WorkPage({ params }: Props) {
	const { slug } = await params;

	const index = projects.findIndex((project) => project.slug === slug);
	const project = projects[index];

	if (!project) {
		notFound();
	}

	const next = projects[(index + 1) % projects.length];
	const variant = coverVariants[index % coverVariants.length];

	return (
		<>
			<section className="flex flex-col items-center pt-20">
				<div className="container flex flex-col">
					<Link
						href="/work"
						className="mb-14 inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-accent">
						← All work
					</Link>

					<div className="mb-12 flex max-w-200 flex-col gap-5">
						<span className="hud-label">
							{project.year} — {project.category}
						</span>
						<h1 className="text-7xl font-bold">{project.title}</h1>
						<p className="max-w-170 text-xl text-muted">{project.tagline}</p>
					</div>

					<div className="mb-14 flex border-y hairline py-8">
						<div className="flex-1 pr-8">
							<span className="hud-label">Year</span>
							<p className="mt-2 text-base">{project.year}</p>
						</div>
						<div className="flex-1 border-l hairline px-8">
							<span className="hud-label">Category</span>
							<p className="mt-2 text-base">{project.category}</p>
						</div>
						<div className="flex-[2] border-l hairline pl-8">
							<span className="hud-label">Stack</span>
							<div className="mt-2.5 flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<Badge key={tag}>{tag}</Badge>
								))}
							</div>
						</div>
					</div>

					<div className="mb-24">
						<ProjectCover letter={project.title[0]} variant={variant} size="lg" />
					</div>

					<div className="mb-24 flex max-w-170 flex-col gap-4">
						<span className="hud-label">Overview</span>
						<p className="text-lg leading-relaxed">{project.description}</p>
					</div>

					<Link href={`/work/${next.slug}`} className="group flex flex-col gap-4 border-t hairline py-10">
						<span className="hud-label">Next project</span>
						<div className="flex flex-wrap items-baseline gap-4">
							<span className="text-3xl font-bold transition-colors group-hover:text-accent">{next.title}</span>
							<span className="text-sm text-muted">{next.tagline} →</span>
						</div>
					</Link>
				</div>
			</section>

			<ClosingCta eyebrow="" />
		</>
	);
}
