'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'motion/react';

const DOWN_THRESHOLD = 0.25;
const UP_THRESHOLD = 0.6;

export function useActiveSection(ids: readonly string[]) {
	const [activeId, setActiveId] = useState(ids[0]);
	const { scrollY } = useScroll();

	const elementsRef = useRef<HTMLElement[]>([]);
	const ratiosRef = useRef<number[]>([]);
	const activeIndexRef = useRef(0);

	useEffect(() => {
		const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
		elementsRef.current = elements;
		ratiosRef.current = elements.map(() => 0);
		activeIndexRef.current = 0;
		if (elements.length === 0) return;

		const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = elements.indexOf(entry.target as HTMLElement);
					if (index !== -1) {
						ratiosRef.current[index] = entry.intersectionRatio;
					}
				});
			},
			{ threshold: thresholds },
		);

		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ids.join(',')]);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const elements = elementsRef.current;
		if (elements.length === 0) return;

		const previous = scrollY.getPrevious() ?? latest;
		const direction = latest > previous ? 'down' : latest < previous ? 'up' : null;
		const ratios = ratiosRef.current;
		let index = activeIndexRef.current;

		if (direction === 'down') {
			while (index + 1 < elements.length && ratios[index + 1] >= DOWN_THRESHOLD) index += 1;
		} else if (direction === 'up') {
			while (index - 1 >= 0 && ratios[index - 1] >= UP_THRESHOLD) index -= 1;
		}

		activeIndexRef.current = index;
		setActiveId(elements[index].id);
	});

	return activeId;
}
