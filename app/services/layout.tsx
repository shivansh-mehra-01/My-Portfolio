import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Capabilities | Shivansh Mehra',
  description: 'Explore the full suite of freelance services offered by Shivansh Mehra: AI Solutions, Web Apps, Mobile Apps, MVP Development, UI/UX Design, and Automation Systems.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
