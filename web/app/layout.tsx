import type { Metadata } from 'next';
import { Bricolage_Grotesque, Spline_Sans } from 'next/font/google';
import '../styles/globals.css';

const displayFont = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
});

const bodyFont = Spline_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'BlueprintKit - Scaffold Production-Ready Projects in Minutes',
  description:
    'BlueprintKit is an open-source CLI that scaffolds production-ready projects in seconds. 15+ templates for modern stacks.',
  keywords: [
    'blueprintkit',
    'code templates',
    'nextjs template',
    'express template',
    'react native template',
    'developer tools',
    'boilerplate',
    'scaffold',
  ],
  authors: [{ name: 'BlueprintKit' }],
  openGraph: {
    title: 'BlueprintKit - Scaffold Production-Ready Projects in Minutes',
    description:
      'Open-source CLI with 15+ templates for Next.js, Express, React Native, and more.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlueprintKit - Scaffold Production-Ready Projects in Minutes',
    description:
      'Open-source CLI with 15+ templates for modern stacks.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
