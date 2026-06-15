import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Shivansh Mehra',
  description: 'Explore the web applications, mobile platforms, and AI integrations built by Shivansh Mehra.',
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
