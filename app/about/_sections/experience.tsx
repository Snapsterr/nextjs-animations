import { profile } from '@/lib/data';
import { ExperienceItem } from '@/components/ui/experience-item';
import { Button } from '@/components/ui/button';
import { TimelineLine } from '@/components/ui/timeline-line';
import { stagger } from '@/lib/motion';
import { StaggerItem, StaggerList } from '@/components/stagger-list';
import { FadeInWhenVisible } from '@/components/fade-in-when-visible';

// span (02 — Experience) and h2 each take their own stagger slot in `container` before the timeline block starts
const headerSteps = 2;
const timelineOwnDelay = headerSteps * stagger.base;
const timelineButtonDelay = timelineOwnDelay + profile.timeline.length * stagger.base;

export function Experience() {
	return (
		<section id="experience" className="flex min-h-[calc(100vh-4rem-1px)] flex-col justify-center items-center py-24">
			<StaggerList className="container flex flex-1 flex-col justify-center gap-16">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<StaggerItem className="hud-label" as="span">
							02 — Experience
						</StaggerItem>
						<StaggerItem className="text-3xl font-bold" as="h2">
							Where I&apos;ve worked.
						</StaggerItem>
					</div>

					<div className="relative">
						<TimelineLine />
						<StaggerList className="flex flex-col" selfFade={true} nested={true}>
							{profile.timeline.map((entry) => (
								<StaggerItem
									key={entry.id}
									className="relative pl-6 after:absolute after:top-8.5 after:-left-[3px] after:size-2 after:rounded-full after:bg-accent after:shadow-[0_0_0_4px_var(--canvas)]">
									<ExperienceItem period={entry.period} role={entry.role} org={entry.org} description={entry.description} />
								</StaggerItem>
							))}
						</StaggerList>
					</div>
				</div>

				<FadeInWhenVisible className="flex justify-between items-center" delay={timelineButtonDelay}>
					<span className="hud-label">
						{profile.timeline.length} teams · {profile.startYear} — Present
					</span>
					<Button href="/work" variant="secondary" size="sm">
						View the work
					</Button>
				</FadeInWhenVisible>
			</StaggerList>
		</section>
	);
}
