import { useEffect } from 'react';
import { useCookieConsent, loadGoogleAnalytics, trackEvent } from '../hooks/useCookieConsent';

const Analytics = ({ trackingId = 'G-XXXXXXXXXX' }) => {
  const { canLoadAnalytics, hasConsent } = useCookieConsent();

  useEffect(() => {
    // โหลด Google Analytics เมื่อได้รับ consent
    if (hasConsent() && canLoadAnalytics()) {
      loadGoogleAnalytics(trackingId);
      
      // Track page view
      trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
      });

      console.log('🔍 Google Analytics loaded with consent');
    }
  }, [hasConsent(), canLoadAnalytics(), trackingId]);

  // Component นี้ไม่แสดง UI อะไร
  return null;
};

export default Analytics; 