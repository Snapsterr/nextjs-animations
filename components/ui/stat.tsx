interface StatProps {
	value: string;
	label: string;
}

export function Stat({ value, label }: StatProps) {
	return (
		<div className="flex flex-col gap-2">
			<span className="font-mono text-[44px] font-bold">{value}</span>
			<span className="hud-label">{label}</span>
		</div>
	);
}
