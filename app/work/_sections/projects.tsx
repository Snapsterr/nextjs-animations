import { ProjectCard } from '@/components/ui/project-card';
import { projects } from '@/lib/data';
import { stagger } from '@/lib/motion';
import { StaggerItem, StaggerList } from '@/components/StaggerList';
import { FadeInWhenVisible } from '@/components/FadeInWhenVisible';

// h1 takes its own stagger slot in `container` before the grid starts
const headerSteps = 1;
const gridOwnDelay = headerSteps * stagger.base;
const cardsDelay = gridOwnDelay + projects.length * stagger.base;

export function Projects() {
	return (
		<section id="projects" className="flex min-h-screen flex-col items-center py-24">
			<StaggerList className="container flex flex-col justify-between gap-16 flex-1">
				<div className="flex flex-col gap-16">
					<div className="flex flex-col gap-4">
						<StaggerItem className="max-w-160 text-5xl font-bold" as="h1">
							Six projects, six different hard problems.
						</StaggerItem>
					</div>

					<StaggerList className="grid grid-cols-1 gap-6 md:grid-cols-3" selfFade={true} nested={true}>
						{projects.map((project, index) => (
							<StaggerItem key={project.id}>
								<ProjectCard project={project} index={index} />
							</StaggerItem>
						))}
					</StaggerList>
				</div>
				<FadeInWhenVisible className="flex flex-col gap-5" delay={cardsDelay}>
					<hr className="border-border-hairline" />
					<span className="hud-label text-center">That's the work so far — six shipped, more in progress</span>
				</FadeInWhenVisible>
			</StaggerList>
		</section>
	);
}
