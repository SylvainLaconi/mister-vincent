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
      url: 'https://www.mister-vicent.fr/home-organiser',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.mister-vicent.fr/office-organiser',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.mister-vicent.fr/death-cleaner',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
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