interface ExperienceItemProps {
	period: string;
	role: string;
	org: string;
	description: string;
}

export function ExperienceItem({ period, role, org, description }: ExperienceItemProps) {
	return (
		<div className="grid grid-cols-[160px_1fr] gap-6 py-7">
			<span className="hud-label pt-0.5">{period}</span>
			<div className="flex flex-col gap-1.5">
				<div className="flex flex-wrap items-baseline gap-2.5">
					<span className="text-xl font-semibold">{role}</span>
					<span className="text-sm text-muted">— {org}</span>
				</div>
				<p className="max-w-160 text-sm leading-relaxed text-muted">{description}</p>
			</div>
		</div>
	);
}
