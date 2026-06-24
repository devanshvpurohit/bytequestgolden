import { EVENT_DETAILS } from './constants';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  url?: string;
}

export const DEFAULT_SEO: SEOMetadata = {
  title: `${EVENT_DETAILS.name} | ${EVENT_DETAILS.date}`,
  description: `Join ${EVENT_DETAILS.name}, a ${EVENT_DETAILS.duration} hackathon at ${EVENT_DETAILS.venue}. Prize pool: ${EVENT_DETAILS.prizePool}. Registration: ${EVENT_DETAILS.registrationFee} per team.`,
  keywords: [
    'hackathon',
    'byte quest',
    'IARE',
    'hyderabad',
    'coding competition',
    'tech event',
    '2026',
    'AI',
    'IoT',
    'Cybersecurity',
    'gaming',
    'student hackathon',
    'programming contest',
  ],
};

export function updatePageMetadata(metadata: Partial<SEOMetadata> = {}) {
  const meta = { ...DEFAULT_SEO, ...metadata };

  // Update title
  document.title = meta.title;

  // Update or create meta tags
  const metaTags: Record<string, string> = {
    description: meta.description,
    keywords: meta.keywords.join(', '),
    'og:title': meta.title,
    'og:description': meta.description,
    'twitter:title': meta.title,
    'twitter:description': meta.description,
  };

  if (meta.ogImage) {
    metaTags['og:image'] = meta.ogImage;
    metaTags['twitter:image'] = meta.ogImage;
  }

  if (meta.url) {
    metaTags['og:url'] = meta.url;
  }

  Object.entries(metaTags).forEach(([name, content]) => {
    const selector = name.startsWith('og:') || name.startsWith('twitter:')
      ? `meta[property="${name}"]`
      : `meta[name="${name}"]`;

    let element = document.querySelector(selector);

    if (!element) {
      element = document.createElement('meta');
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        element.setAttribute('property', name);
      } else {
        element.setAttribute('name', name);
      }
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  });
}
