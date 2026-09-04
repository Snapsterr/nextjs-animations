import { profile, socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function ClosingCta() {
	return (
		<section id="contact" className="flex min-h-[80vh] flex-col justify-center items-center py-24">
			<div className="container flex flex-1 flex-col justify-between gap-16">
				<div className="flex flex-col gap-8 justify-center items-center">
					<span className="hud-label">03 — Get in touch</span>
					<h2 className="max-w-200 text-6xl font-bold text-center">Have something reliable to build? Let&apos;s talk.</h2>
					<div className="flex flex-wrap items-center gap-4">
						<Button href={`mailto:${profile.email}`} variant="primary">
							Mail me
						</Button>
						<Button href="/work" variant="secondary">
							View Work
						</Button>
					</div>
				</div>

				<div className="flex flex-wrap items-center justify-between gap-4">
					<span className="hud-label">{profile.location}</span>
					<div className="flex items-center gap-6">
						{socialLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								target="_blank"
								rel="noreferrer"
								className="hud-label transition-colors hover:text-accent">
								{link.label}
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
