import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { duration, stagger } from '@/lib/motion';
import { StaggerItem, StaggerList } from '@/components/stagger-list';
import { FadeInWhenVisible } from '@/components/fade-in-when-visible';

const featuredProjects = projects.filter((project) => project.featured);

const buttonDelay = featuredProjects.length * stagger.base;

export function FeaturedWork() {
	return (
		<section id="work" className="flex min-h-screen flex-col items-center py-24">
			<StaggerList className="container flex flex-col justify-center gap-16 flex-1">
				<div className="flex flex-wrap items-end justify-between gap-8">
					<div className="flex flex-col gap-4">
						<StaggerItem className="max-w-160 text-5xl font-bold" as="h2">
							Systems and products I&apos;ve built end to end.
						</StaggerItem>
					</div>
					<FadeInWhenVisible duration={duration.fast} delay={buttonDelay}>
						<Button href="/work" variant="secondary" size="sm">
							View all work
						</Button>
					</FadeInWhenVisible>
				</div>

				<StaggerList className="grid grid-cols-1 gap-6 md:grid-cols-3" nested={true}>
					{featuredProjects.map((project, index) => (
						<StaggerItem key={project.id}>
							<ProjectCard project={project} index={index} />
						</StaggerItem>
					))}
				</StaggerList>
			</StaggerList>
		</section>
	);
}
