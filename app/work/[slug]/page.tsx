import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '@/lib/data';
import { coverVariants } from '@/components/ui/project-cover';
import { ClosingCta } from '@/app/_sections/closing-cta';
import { ProjectDetail } from './_sections/project-detail';

export async function generateMetadata({ params }: PageProps<'/work/[slug]'>): Promise<Metadata> {
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

export default async function WorkPage({ params }: PageProps<'/work/[slug]'>) {
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
			<ProjectDetail project={project} next={next} variant={variant} />

			<ClosingCta eyebrow="" />
		</>
	);
}
