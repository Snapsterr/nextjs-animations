import Link from 'next/link';
import { cn } from 'tailwind-variants';

interface NavbarLinkProps {
	href: string;
	children: React.ReactNode;
	isActive?: boolean;
}

export function NavbarLink({ href, children, isActive }: NavbarLinkProps) {
	return (
		<Link href={href} className={cn('hud-label transition-colors', isActive ? 'text-accent' : 'hover:text-ink')}>
			{children}
		</Link>
	);
}
