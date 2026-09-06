export function Badge({ children }: { children: React.ReactNode }) {
	return <span className="hud-label rounded-full shadow-hairline px-2 py-1">{children}</span>;
}
