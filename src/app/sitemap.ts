import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.mister-vicent.fr/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.mister-vicent.fr/cgu',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.1,
    },
    {
      url: 'https://www.mister-vicent.fr/mentions-legales',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.1,
    },
  ]
}