import { profile } from '@/lib/data';
import { ExperienceItem } from '@/components/ui/experience-item';
import { Button } from '@/components/ui/button';
import { stagger } from '@/lib/motion';
import { StaggerItem, StaggerList } from '@/components/StaggerList';
import { FadeInWhenVisible } from '@/components/FadeInWhenVisible';

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

					<StaggerList
						className="flex flex-col divide-y divide-border-hairline border-y border-border-hairline"
						selfFade={true}
						nested={true}>
						{profile.timeline.map((entry) => (
							<StaggerItem key={entry.id}>
								<ExperienceItem period={entry.period} role={entry.role} org={entry.org} description={entry.description} />
							</StaggerItem>
						))}
					</StaggerList>
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
