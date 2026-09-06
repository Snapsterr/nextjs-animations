import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About John Doe',
	description: 'About John Doe',
};

export default function AboutLayout({ children }: LayoutProps<'/about'>) {
	return <section>{children}</section>;
}
