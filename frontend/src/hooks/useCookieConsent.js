import { useState, useEffect } from 'react';

export const useCookieConsent = () => {
  const [consent, setConsent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // อ่านข้อมูล consent จาก localStorage
    const storedConsent = localStorage.getItem('cookieConsent');
    
    if (storedConsent) {
      try {
        const parsedConsent = JSON.parse(storedConsent);
        setConsent(parsedConsent);
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
        setConsent(null);
      }
    }
    
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // ฟัง event การอัพเดท consent
    const handleConsentUpdate = (event) => {
      setConsent(event.detail);
    };

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate);
    
    return () => {
      window.removeEventListener('cookieConsentUpdated', handleConsentUpdate);
    };
  }, []);

  // ฟังก์ชันตรวจสอบว่ามีการ consent หรือไม่
  const hasConsent = () => {
    return consent !== null;
  };

  // ฟังก์ชันตรวจสอบ consent ของแต่ละประเภท
  const isConsentGiven = (type) => {
    if (!consent || !consent.preferences) return false;
    return consent.preferences[type] === true;
  };

  // ฟังก์ชันรีเซ็ต consent (สำหรับการทดสอบ)
  const resetConsent = () => {
    localStorage.removeItem('cookieConsent');
    setConsent(null);
    window.location.reload();
  };

  // ฟังก์ชันตรวจสอบว่าควรโหลด analytics script หรือไม่
  const canLoadAnalytics = () => {
    return isConsentGiven('analytics');
  };

  // ฟังก์ชันตรวจสอบว่าควรโหลด marketing script หรือไม่
  const canLoadMarketing = () => {
    return isConsentGiven('marketing');
  };

  // ฟังก์ชันตรวจสอบว่าควรใช้ personalization หรือไม่
  const canUsePersonalization = () => {
    return isConsentGiven('personalization');
  };

  return {
    consent,
    isLoading,
    hasConsent,
    isConsentGiven,
    canLoadAnalytics,
    canLoadMarketing,
    canUsePersonalization,
    resetConsent
  };
};

// Utility function สำหรับโหลด Google Analytics
export const loadGoogleAnalytics = (trackingId) => {
  if (typeof window === 'undefined') return;

  // โหลด gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script1);

  // เริ่มต้น gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', trackingId);
  
  window.gtag = gtag;
};

// Utility function สำหรับส่ง event ไป Analytics
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Utility function สำหรับจัดการ marketing cookies
export const setMarketingCookie = (name, value, days = 30) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

export const getMarketingCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const removeMarketingCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
}; 