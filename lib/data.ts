export const navLinks = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Work',
		href: '/work',
	},
];

export type Project = {
	id: string;
	slug: string;
	title: string;
	tagline: string;
	description: string;
	category: string;
	year: number;
	tags: string[];
	featured: boolean;
};

export const projects: Project[] = [
	{
		id: 'lumen',
		slug: 'lumen',
		title: 'Lumen',
		tagline: 'A sync layer that pushes lighting state to devices in under 200ms',
		description:
			'Real-time control system for adaptive home lighting: a WebSocket-first sync layer between cloud and embedded devices, with a rules engine that learns room usage and adjusts color temperature through the day.',
		category: 'Backend & Realtime',
		year: 2025,
		tags: ['Node.js', 'WebSockets', 'Redis', 'Embedded'],
		featured: true,
	},
	{
		id: 'aperture',
		slug: 'aperture',
		title: 'Aperture',
		tagline: 'Rebuilding a marketplace around a streaming image pipeline',
		description:
			'Full-stack rebuild of a photography marketplace: a Next.js storefront on top of a licensing and checkout API, with an image pipeline that serves large-format previews without blocking first paint.',
		category: 'Full-Stack Development',
		year: 2024,
		tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Edge Caching'],
		featured: true,
	},
	{
		id: 'fathom',
		slug: 'fathom',
		title: 'Fathom',
		tagline: 'Turning a decade of raw telemetry into one live map',
		description:
			'Ingestion and dashboard stack for an ocean sensor network: a streaming pipeline that normalizes years of raw telemetry and renders it as a live map a research team can read in seconds, not spreadsheets.',
		category: 'Data Engineering',
		year: 2024,
		tags: ['D3.js', 'Kafka', 'Time-series DB', 'Dashboards'],
		featured: true,
	},
	{
		id: 'nomad',
		slug: 'nomad',
		title: 'Nomad',
		tagline: 'An offline-first sync engine for a travel companion app',
		description:
			'Rearchitected a travel app around a conflict-free offline sync engine, collapsing multi-city itinerary planning into one continuous timeline that stays consistent with or without a connection.',
		category: 'Frontend Engineering',
		year: 2023,
		tags: ['React Native', 'CRDT', 'SQLite', 'Offline-first'],
		featured: false,
	},
	{
		id: 'circuit',
		slug: 'circuit',
		title: 'Circuit',
		tagline: 'A CMS and site for a hardware studio that builds in the open',
		description:
			'Site and lightweight CMS for a boutique hardware studio, with a build-log publishing flow and an image pipeline tuned for teardown photography at full resolution.',
		category: 'Full-Stack / CMS',
		year: 2023,
		tags: ['Next.js', 'Prisma', 'S3', 'Webflow migration'],
		featured: false,
	},
	{
		id: 'vantage',
		slug: 'vantage',
		title: 'Vantage',
		tagline: 'One view instead of six, for a support team drowning in tabs',
		description:
			'Internal analytics tool for a customer support org: a GraphQL API over several legacy data sources, cutting average ticket triage time by unifying six dashboards into one.',
		category: 'Internal Tooling',
		year: 2022,
		tags: ['GraphQL', 'React', 'B2B', 'Analytics'],
		featured: false,
	},
];

export type TimelineEntry = {
	id: string;
	role: string;
	org: string;
	period: string;
	description: string;
};

export const socialLinks = [
	{ label: 'GitHub', href: 'https://github.com/' },
	{ label: 'LinkedIn', href: 'https://linkedin.com/' },
	{ label: 'X', href: 'https://x.com/' },
];

export const profile = {
	name: 'John Doe',
	role: 'Software Engineer',
	location: 'Lisbon, Portugal',
	email: 'hello@johndoe.dev',
	startYear: 2018,
	availability: 'Available for freelance & full-time work',
	bio: [
		'I build reliable, thoughtful software for the web, moving from system design and prototyping through to shipped, production-quality code.',
		'Lately I have been spending most of my time at the intersection of real-time systems, motion on the web, and frontend architecture that holds up under real traffic, not just a demo.',
	],
	skills: [
		'TypeScript / Next.js',
		'System Design',
		'Real-time & WebSockets',
		'API & Data Modeling',
		'Motion & Interaction',
		'Performance Engineering',
	],
	timeline: [
		{
			id: 'freelance',
			role: 'Independent Software Engineer',
			org: 'Self-employed',
			period: '2023 — Present',
			description: 'Full-stack engineering for early-stage product teams, from first prototype to production build.',
		},
		{
			id: 'orbital',
			role: 'Senior Software Engineer',
			org: 'Orbital Labs',
			period: '2020 — 2023',
			description: 'Led engineering for the core dashboard product, and introduced the team’s first shared component library.',
		},
		{
			id: 'northwind',
			role: 'Software Engineer',
			org: 'Northwind Studio',
			period: '2018 — 2020',
			description: 'Built and shipped features for a portfolio of client products across fintech and travel.',
		},
	] satisfies TimelineEntry[],
};
