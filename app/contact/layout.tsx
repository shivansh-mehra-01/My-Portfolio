import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Shivansh Mehra | Let\'s Talk',
  description: 'Get in touch with Shivansh Mehra. Start your project, request a quote, or explore freelance partnership opportunities.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
