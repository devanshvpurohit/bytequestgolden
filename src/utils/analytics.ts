// Analytics and tracking utilities

export type EventCategory = 'navigation' | 'game' | 'registration' | 'engagement';

interface AnalyticsEvent {
  category: EventCategory;
  action: string;
  label?: string;
  value?: number;
}

/**
 * Track custom events
 * Replace with your actual analytics provider (Google Analytics, Mixpanel, etc.)
 */
export function trackEvent({ category, action, label, value }: AnalyticsEvent) {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log('[Analytics]', { category, action, label, value });
  }

  // Add your analytics tracking code here
  // Example for Google Analytics 4:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', action, {
  //     event_category: category,
  //     event_label: label,
  //     value: value,
  //   });
  // }
}

export const analytics = {
  // Navigation events
  viewPage: (pageName: string) =>
    trackEvent({ category: 'navigation', action: 'view_page', label: pageName }),

  // Game events
  startGame: () =>
    trackEvent({ category: 'game', action: 'start_game' }),
  
  completeGame: (score?: number) =>
    trackEvent({ category: 'game', action: 'complete_game', value: score }),

  // Registration events
  clickRegister: () =>
    trackEvent({ category: 'registration', action: 'click_register' }),
  
  openRegistrationForm: () =>
    trackEvent({ category: 'registration', action: 'open_form' }),

  // Engagement events
  viewInstructions: () =>
    trackEvent({ category: 'engagement', action: 'view_instructions' }),
  
  clickSocialMedia: (platform: string) =>
    trackEvent({ category: 'engagement', action: 'click_social', label: platform }),
};
