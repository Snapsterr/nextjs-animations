'use client';

import { useActiveSection } from '@/hooks/use-active-section';
import { useIsVisible } from '@/hooks/use-is-visible';

interface HudSection {
	id: string;
	label: string;
}

interface HudOverlayProps {
	sections: readonly HudSection[];
	coordinates: string;
	footerId: string;
}

export function HudOverlay({ sections, coordinates, footerId }: HudOverlayProps) {
	const ids = sections.map((s) => s.id);
	const activeId = useActiveSection(ids);
	const footerVisible = useIsVisible(footerId);

	if (footerVisible) return null;

	const activeIndex = sections.findIndex((s) => s.id === activeId);
	const isLastSection = activeIndex === sections.length - 1;

	return (
		<div
			className="fixed inset-x-0 bottom-0 border-t hairline bg-canvas/80 backdrop-blur-md pointer-events-none"
			aria-hidden="true">
			<div className="container mx-auto flex items-center justify-between gap-4 px-[var(--gutter)] py-3">
				<span className="hud-label">{coordinates}</span>
				{!isLastSection && <span className="hud-label">{sections[activeIndex].label}</span>}
				{!isLastSection && <span className="hud-label">Scroll to explore ↓</span>}
			</div>
		</div>
	);
}
