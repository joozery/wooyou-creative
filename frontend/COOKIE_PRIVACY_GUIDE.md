# Cookie Consent & Privacy Policy Guide

## 🍪 Cookie Consent System

### Features
- ✅ GDPR/PDPA Compliant cookie consent popup
- ✅ Granular cookie controls (Necessary, Analytics, Marketing, Personalization)
- ✅ Animated UI with Framer Motion
- ✅ Local storage management
- ✅ Google Analytics integration
- ✅ Mobile responsive design

### Components

#### 1. CookieConsent Component
```jsx
import CookieConsent from './components/CookieConsent';

// แสดง popup เมื่อยังไม่มีการ consent
<CookieConsent />
```

#### 2. Privacy Policy Page
```jsx
import PrivacyPolicy from './pages/PrivacyPolicy';

// หน้า Privacy Policy ที่ /privacy-policy
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
```

#### 3. Analytics Component
```jsx
import Analytics from './components/Analytics';

// โหลด Google Analytics เมื่อได้รับ consent
<Analytics trackingId="G-XXXXXXXXXX" />
```

### Custom Hook

#### useCookieConsent Hook
```jsx
import { useCookieConsent } from './hooks/useCookieConsent';

function MyComponent() {
  const {
    consent,
    hasConsent,
    canLoadAnalytics,
    canLoadMarketing,
    canUsePersonalization,
    resetConsent
  } = useCookieConsent();

  if (canLoadAnalytics()) {
    // โหลด analytics script
  }

  return <div>...</div>;
}
```

### Cookie Types

1. **Necessary Cookies** 🔒
   - เปิดอยู่เสมอ (ไม่สามารถปิดได้)
   - จำเป็นสำหรับการทำงานของเว็บไซต์

2. **Analytics Cookies** 📊
   - Google Analytics
   - การวิเคราะห์การใช้งาน

3. **Marketing Cookies** 🎯
   - โฆษณาที่ตรงกลุ่มเป้าหมาย
   - การติดตามข้ามเว็บไซต์

4. **Personalization Cookies** ⚙️
   - การปรับแต่งประสบการณ์ผู้ใช้
   - การจดจำการตั้งค่า

## 🛡️ Privacy Policy

### Content Includes
- ข้อมูลที่เราเก็บรวบรวม
- การใช้คุกกี้
- วัตถุประสงค์การใช้ข้อมูล
- การแบ่งปันข้อมูล
- สิทธิของเจ้าของข้อมูล
- ความปลอดภัยของข้อมูล
- ข้อมูลติดต่อ

### Responsive Design
- ✅ Mobile-first design
- ✅ Tablet optimized
- ✅ Desktop enhanced
- ✅ Dark theme matching site design

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
npm install framer-motion react-icons react-router-dom
```

### 2. Import Components
```jsx
// App.jsx
import CookieConsent from './components/CookieConsent';
import Analytics from './components/Analytics';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      {/* Your routes */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      
      {/* Cookie consent & analytics */}
      <CookieConsent />
      <Analytics trackingId="YOUR_GA_TRACKING_ID" />
    </Router>
  );
}
```

### 3. Configure Google Analytics
```jsx
// เปลี่ยน tracking ID ใน Analytics component
<Analytics trackingId="G-YOUR_TRACKING_ID" />
```

### 4. Customize Styling
- เปลี่ยนสีใน Tailwind classes
- ปรับ animation ใน Framer Motion
- แก้ไขข้อความในภาษาไทย/อังกฤษ

## 🛠️ Development Tools

### Reset Consent (for testing)
```jsx
import { useCookieConsent } from './hooks/useCookieConsent';

function DeveloperTools() {
  const { resetConsent } = useCookieConsent();
  
  return (
    <button onClick={resetConsent}>
      Reset Cookie Consent
    </button>
  );
}
```

### Check Consent Status
```jsx
// ตรวจสอบใน browser console
console.log(localStorage.getItem('cookieConsent'));
```

## 📱 Mobile Considerations

- ✅ Touch-friendly button sizes
- ✅ Readable text on small screens  
- ✅ Proper z-index stacking
- ✅ Responsive animations
- ✅ Backdrop blur for readability

## 🔒 Privacy Compliance

### GDPR Compliance
- ✅ Clear consent mechanism
- ✅ Granular cookie controls
- ✅ Easy withdrawal of consent
- ✅ Privacy policy link
- ✅ Data subject rights information

### PDPA (Thailand) Compliance
- ✅ Thai language support
- ✅ Local contact information
- ✅ Clear data usage purpose
- ✅ User rights explanation

## 🎨 Customization

### Colors (Tailwind CSS)
```css
/* Current theme */
Primary: #3b82f6 (blue-500)
Secondary: #2563eb (blue-600)
Background: #111827 (gray-900)
Text: #f3f4f6 (gray-100)
```

### Animations
```jsx
// Framer Motion variants
const popupVariants = {
  initial: { opacity: 0, y: 100, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 100, scale: 0.9 }
};
```

---

**Note**: อย่าลืมแทนที่ tracking ID และข้อมูลติดต่อด้วยข้อมูลจริงของบริษัท 