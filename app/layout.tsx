import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bloop',
  description: 'Bloop - your bubbly companion',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
