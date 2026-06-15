import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Shivansh Mehra',
  description: 'Learn about Shivansh Mehra, a full-stack engineer and freelancer building production-ready apps and AI integrations.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
