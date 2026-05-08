import { MetadataRoute } from 'next';
import { getFullPublicSitemapEntries } from '@/lib/seo/sitemap';

export default function sitemap(): MetadataRoute.Sitemap {
  return getFullPublicSitemapEntries();
}
