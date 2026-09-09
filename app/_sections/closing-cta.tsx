import { profile } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { StaggerItem, StaggerList } from '@/components/StaggerList';

interface ClosingCtaProps {
	eyebrow?: string;
}

export function ClosingCta({ eyebrow = '03 — Get in touch' }: ClosingCtaProps) {
	return (
		<section id="contact" className="flex min-h-[80vh] flex-col justify-center items-center py-24">
			<div className="container flex flex-1 flex-col justify-center gap-16">
				<StaggerList className="flex flex-col gap-8 justify-center items-center">
					{eyebrow && (
						<StaggerItem className="hud-label" as="span">
							{eyebrow}
						</StaggerItem>
					)}
					<StaggerItem className="max-w-200 text-6xl font-bold text-center" as="h2">
						Have something reliable to build? Let&apos;s talk.
					</StaggerItem>
					<StaggerItem className="flex flex-wrap items-center gap-4">
						<Button href={`mailto:${profile.email}`} variant="primary">
							Mail me
						</Button>
						<Button href="/work" variant="secondary">
							View Work
						</Button>
					</StaggerItem>
				</StaggerList>
			</div>
		</section>
	);
}
