import { profile } from '@/lib/data';
import { ExperienceItem } from '@/components/ui/experience-item';
import { Button } from '@/components/ui/button';

export function Experience() {
	return (
		<section id="experience" className="flex min-h-[calc(100vh-4rem-1px)] flex-col justify-center items-center py-24">
			<div className="container flex flex-1 flex-col justify-center gap-16">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<span className="hud-label">02 — Experience</span>
						<h2 className="text-3xl font-bold">Where I&apos;ve worked.</h2>
					</div>

					<div className="flex flex-col divide-y divide-border-hairline border-y border-border-hairline">
						{profile.timeline.map((entry) => (
							<ExperienceItem
								key={entry.id}
								period={entry.period}
								role={entry.role}
								org={entry.org}
								description={entry.description}
							/>
						))}
					</div>
				</div>

				<div className="flex justify-between items-center">
					<span className="hud-label">
						{profile.timeline.length} teams · {profile.startYear} — Present
					</span>
					<Button href="/work" variant="secondary" size="sm">
						View the work
					</Button>
				</div>
			</div>
		</section>
	);
}
