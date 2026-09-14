'use client';

import { useAnimationFrame } from 'motion/react';
import { useRef, useState } from 'react';
import { duration as durationTokens } from '@/lib/motion';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

export function useScrambleText(text: string, durationMs = durationTokens.slow * 1000, tickMs = 40) {
	const [display, setDisplay] = useState(text);

	const revealed = useRef(0);
	const sinceTick = useRef(0);
	const done = useRef(false);

	const totalTicks = Math.max(1, Math.round(durationMs / tickMs));
	const charsPerTick = Math.max(1, Math.ceil(text.length / totalTicks));

	useAnimationFrame((_, delta) => {
		if (done.current) return;

		sinceTick.current += delta;
		if (sinceTick.current < tickMs) return;
		sinceTick.current = 0;

		revealed.current = Math.min(revealed.current + charsPerTick, text.length);

		const scrambledText = text
			.split('')
			.map((ch, i) => (ch === ' ' ? ' ' : i < revealed.current ? ch : randomGlyph()))
			.join('');
		setDisplay(scrambledText);

		if (revealed.current >= text.length) done.current = true;
	});

	return display;
}
