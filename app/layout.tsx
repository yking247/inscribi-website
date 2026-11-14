import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inscribi.app'),
  title: { default: 'Inscribi — Your living notes library', template: '%s | Inscribi' },
  description: 'A calmer place for sermons, Bible studies, Gems and reflections.',
  alternates: { canonical: 'https://www.inscribi.app/' },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/inscribi-icon.png` },
  openGraph: {
    title: 'Inscribi — Your living notes library',
    description: 'A calmer place for sermons, Bible studies, Gems and reflections.',
    url: 'https://www.inscribi.app/',
    siteName: 'Inscribi',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://www.inscribi.app/images/home-in-use.png', alt: 'Inscribi demo Home screen' }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
