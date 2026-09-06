import { ProjectCard } from '@/components/ui/project-card';
import { projects } from '@/lib/data';

export function Projects() {
	return (
		<section id="projects" className="flex min-h-screen flex-col items-center py-24">
			<div className="container flex flex-col justify-between gap-16 flex-1">
				<div className="flex flex-col gap-16">
					<div className="flex flex-col gap-4">
						<h1 className="max-w-160 text-5xl font-bold">Six projects, six different hard problems.</h1>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{projects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<hr className="border-border-hairline" />
					<span className="hud-label text-center">That's the work so far — six shipped, more in progress</span>
				</div>
			</div>
		</section>
	);
}
