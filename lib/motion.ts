export const ease = {
	out: [0.16, 1, 0.3, 1],
	inOut: [0.65, 0, 0.35, 1],
} as const;

export const duration = {
	fast: 0.2,
	base: 0.5,
	slow: 0.9,
	section: 1.2,
} as const;

export const stagger = {
	tight: 0.05,
	base: 0.08,
} as const;
