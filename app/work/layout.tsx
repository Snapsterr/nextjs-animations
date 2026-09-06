import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Work by John Doe',
	description: 'Work by John Doe',
};

export default function WorkLayout({ children }: LayoutProps<'/work'>) {
	return <section>{children}</section>;
}
