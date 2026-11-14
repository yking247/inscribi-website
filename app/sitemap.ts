import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-metadata';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/features/', '/pricing/', '/privacy/', '/terms/', '/support/', '/delete-account/']
    .map(path => ({ url: `${siteUrl}${path}` }));
}
