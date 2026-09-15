'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(ids: readonly string[]) {
	const [activeId, setActiveId] = useState(ids[0]);

	useEffect(() => {
		const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
		if (elements.length === 0) return;

		const DOWN_THRESHOLD = 0.25;
		const UP_THRESHOLD = 0.6;

		const ratios = elements.map(() => 0);
		let activeIndex = 0;
		let lastScrollY = window.scrollY;

		const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

		const update = () => {
			const scrollY = window.scrollY;
			const direction = scrollY > lastScrollY ? 'down' : scrollY < lastScrollY ? 'up' : null;
			lastScrollY = scrollY;

			if (direction === 'down') {
				while (activeIndex + 1 < elements.length && ratios[activeIndex + 1] >= DOWN_THRESHOLD) {
					activeIndex += 1;
				}
			} else if (direction === 'up') {
				while (activeIndex - 1 >= 0 && ratios[activeIndex - 1] >= UP_THRESHOLD) {
					activeIndex -= 1;
				}
			}

			setActiveId(elements[activeIndex].id);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = elements.indexOf(entry.target as HTMLElement);
					if (index !== -1) {
						ratios[index] = entry.intersectionRatio;
					}
				});
				update();
			},
			{ threshold: thresholds },
		);

		elements.forEach((el) => observer.observe(el));
		window.addEventListener('scroll', update, { passive: true });

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', update);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ids.join(',')]);

	return activeId;
}
