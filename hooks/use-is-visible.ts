'use client';

import { useEffect, useState } from 'react';

export function useIsVisible(id: string) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = document.getElementById(id);
		if (!el) return;

		const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
		observer.observe(el);

		return () => observer.disconnect();
	}, [id]);

	return visible;
}
