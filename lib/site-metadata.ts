import type { Metadata } from 'next';

export const siteUrl = 'https://www.inscribi.app';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title: `${title} | Inscribi`,
      description,
      url: `${siteUrl}${path}`,
      siteName: 'Inscribi',
      locale: 'en_GB',
      type: 'website',
      images: [{ url: `${siteUrl}/images/home-in-use.png`, alt: 'Inscribi demo Home screen' }],
    },
  };
}
