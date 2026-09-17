import { profile, socialLinks } from '@/lib/data';

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer id="site-footer" className="border-t hairline flex justify-center items-center bg-canvas/60 backdrop-blur-md">
			<div className="container flex flex-wrap items-center justify-between gap-4 py-8">
				<span className="hud-label">
					© {year} {profile.name}
				</span>
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
				<span className="hud-label">{profile.email}</span>
			</div>
		</footer>
	);
}
