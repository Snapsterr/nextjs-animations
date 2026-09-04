import Link from 'next/link';
import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv({
	base: 'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-40',
	variants: {
		variant: {
			primary: 'bg-accent text-accent-ink hover:bg-accent/90',
			secondary: 'border hairline text-ink hover:border-accent',
			ghost: 'text-ink hover:text-accent',
		},
		size: {
			sm: 'px-5 py-2.5 text-[13px]',
			md: 'px-7 py-3.5 text-sm',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});

type ButtonVariants = VariantProps<typeof button>;

interface BaseProps extends ButtonVariants {
	children: React.ReactNode;
	className?: string;
}

type ButtonProps = BaseProps &
	({ href: string } & Omit<React.ComponentProps<typeof Link>, 'href' | 'className'>);

type NativeButtonProps = BaseProps &
	Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: undefined };

export function Button({ children, className, variant, size, href, ...props }: ButtonProps | NativeButtonProps) {
	const classes = button({ variant, size, className });

	if (href) {
		return (
			<Link
				href={href}
				className={classes}
				{...(props as Omit<React.ComponentProps<typeof Link>, 'href' | 'className'>)}
			>
				{children}
			</Link>
		);
	}

	return (
		<button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
			{children}
		</button>
	);
}
