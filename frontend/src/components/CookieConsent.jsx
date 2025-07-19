import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCookie, FaCheck, FaTimes, FaCog } from 'react-icons/fa';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // จำเป็น - ไม่สามารถปิดได้
    analytics: false,
    marketing: false,
    personalization: false
  });

  // ตรวจสอบว่าเคยให้ consent แล้วหรือยัง
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  // บันทึก consent preferences
  const saveConsent = (accepted = false, customPreferences = null) => {
    const consentData = {
      timestamp: new Date().toISOString(),
      accepted,
      preferences: customPreferences || preferences
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
    
    // ส่ง event เพื่อแจ้งว่า consent ได้รับการอัพเดทแล้ว
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { 
      detail: consentData 
    }));
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true
    };
    saveConsent(true, allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    };
    saveConsent(false, onlyNecessary);
  };

  const handleSaveSettings = () => {
    saveConsent(true, preferences);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return; // ไม่สามารถเปลี่ยน necessary ได้
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setShowSettings(false)}
          />

          {/* Cookie Consent Panel */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 xl:max-w-md xl:left-auto xl:right-8 z-50 font-prompt"
          >
            <div className="bg-gray-900 border border-blue-500/30 rounded-2xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FaCookie className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-white font-semibold text-lg">
                  การใช้คุกกี้
                </h3>
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ วิเคราะห์การใช้งาน และแสดงเนื้อหาที่เหมาะสม คุณสามารถเลือกประเภทคุกกี้ที่ต้องการยอมรับได้
              </p>

              {/* Settings Panel */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 overflow-hidden"
                  >
                    <div className="bg-gray-800 rounded-lg p-4 space-y-3">
                      {Object.entries({
                        necessary: { 
                          label: 'คุกกี้จำเป็น', 
                          desc: 'จำเป็นสำหรับการทำงานของเว็บไซต์',
                          disabled: true
                        },
                        analytics: { 
                          label: 'คุกกี้วิเคราะห์', 
                          desc: 'เพื่อปรับปรุงประสิทธิภาพเว็บไซต์' 
                        },
                        marketing: { 
                          label: 'คุกกี้การตลาด', 
                          desc: 'เพื่อแสดงโฆษณาที่เหมาะสม' 
                        },
                        personalization: { 
                          label: 'คุกกี้ปรับแต่ง', 
                          desc: 'เพื่อปรับแต่งเนื้อหาตามความชอบ' 
                        }
                      }).map(([key, config]) => (
                        <div key={key} className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-white text-sm font-medium">
                              {config.label}
                            </p>
                            <p className="text-gray-400 text-xs">
                              {config.desc}
                            </p>
                          </div>
                          <button
                            onClick={() => handlePreferenceChange(key)}
                            disabled={config.disabled}
                            className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                              preferences[key] 
                                ? 'bg-blue-500' 
                                : 'bg-gray-600'
                            } ${config.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            <div
                              className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg transition-transform duration-200 ${
                                preferences[key] ? 'translate-x-7' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRejectAll}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  <FaTimes className="text-xs" />
                  ปฏิเสธทั้งหมด
                </button>
                
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  <FaCog className="text-xs" />
                  ตั้งค่า
                </button>

                {showSettings ? (
                  <button
                    onClick={handleSaveSettings}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <FaCheck className="text-xs" />
                    บันทึกการตั้งค่า
                  </button>
                ) : (
                  <button
                    onClick={handleAcceptAll}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <FaCheck className="text-xs" />
                    ยอมรับทั้งหมด
                  </button>
                )}
              </div>

              {/* Privacy Policy Link */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <a
                  href="/privacy-policy"
                  className="text-blue-400 hover:text-blue-300 text-xs underline transition-colors duration-200"
                >
                  อ่านนโยบายความเป็นส่วนตัว
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 