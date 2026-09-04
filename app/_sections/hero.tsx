export function Hero() {
	return (
		<section className="flex min-h-[calc(100vh-4rem-1px)] justify-center relative">
			<div className="absolute inset-0 bg-gradient-grid bg-repeat user-select-none pointer-events-none" />
			<div className="absolute top-42 left-82 w-14 h-14 rounded-md bg-surface-2 border border-border-hairline shadow-shape -rotate-8 -z-1 user-select-none pointer-events-none -z-1" />
			<div className="absolute top-128 right-73 w-14 h-14 rounded-md bg-surface-2 border border-border-hairline shadow-shape rotate-14 -z-1 user-select-none pointer-events-none -z-1" />
			<div className="absolute top-24 right-89 w-10 h-10 rounded-full bg-surface-2 shadow-shape user-select-none pointer-events-none -z-1" />
			<div className="absolute top-27 left-1/2 -translate-x-1/2 w-130 h-130 rounded-full shadow-radial bg-accent/6">
				<div className="absolute top-[14%] left-[22%] w-[32%] h-[22%] rounded-full bg-white/35 blur-[22px]" />
			</div>

			<div className="container w-full grid grid-rows-[auto_1fr_50] min-h-full py-10">
				<div className="w-full flex justify-between">
					<div className="flex flex-col gap-1">
						<h1 className="text-5xl font-bold">John Doe</h1>
						<span className="text-muted">Lisbon, PT · Available for work</span>
					</div>
					<div className="max-w-75">
						<p className="text-right text-muted">
							I'm a software engineer with a passion for building web applications that are both functional and beautiful.
						</p>
					</div>
				</div>
				<div className="flex flex-1 items-center">
					<div className="flex self-end max-w-240 pb-50">
						<p className="text-8xl font-bold">I build reliable, thoughtful software for the web.</p>
					</div>
				</div>
				<div className="flex justify-between items-center gap-2">
					<span className="hud-label">41.15°N, 8.61°W</span>
					<span className="hud-label">01 — Intro</span>
					<span className="hud-label">Scroll to explore ↓</span>
				</div>
			</div>
		</section>
	);
}
