import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';

const featuredProjects = projects.filter((project) => project.featured);

export function FeaturedWork() {
	return (
		<section id="work" className="flex min-h-screen flex-col items-center py-24">
			<div className="container flex flex-col justify-between gap-16 flex-1">
				<div className="flex flex-col gap-16">
					<div className="flex flex-wrap items-end justify-between gap-8">
						<div className="flex flex-col gap-4">
							<h2 className="max-w-160 text-5xl font-bold">Systems and products I&apos;ve built end to end.</h2>
						</div>
						<Button href="/work" variant="secondary" size="sm">
							View all work
						</Button>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{featuredProjects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>
				</div>
				<div className="flex justify-center items-center">
					<span className="hud-label">02 — Work</span>
				</div>
			</div>
		</section>
	);
}
