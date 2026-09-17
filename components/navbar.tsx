'use client';

import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/data';
import { NavbarLink } from './ui/navbar-link';

export function Navbar() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 border-b hairline bg-canvas/60 backdrop-blur-md">
			<div className="mx-auto flex h-16 w-full max-w-[var(--container-max)] items-center justify-end px-[var(--gutter)]">
				<nav className="flex items-center gap-8">
					{navLinks.map((link) => (
						<NavbarLink key={link.href} href={link.href} isActive={pathname === link.href}>
							{link.label}
						</NavbarLink>
					))}
				</nav>
			</div>
		</header>
	);
}
