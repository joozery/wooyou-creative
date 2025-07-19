import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  FaCode, 
  FaPalette, 
  FaChartLine, 
  FaCog, 
  FaGamepad, 
  FaMobile,
  FaArrowLeft,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaDownload,
  FaClock,
  FaUsers,
  FaRocket,
  FaTrophy
} from 'react-icons/fa';

const ServiceDetail = () => {
  const { serviceType } = useParams();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const serviceData = {
    'web-development': {
      icon: <FaCode />,
      title: "Web Development",
      subtitle: "พัฒนาเว็บไซต์และเว็บแอปพลิเคชันที่ทันสมัย",
      description: "เราพัฒนาเว็บไซต์และเว็บแอปพลิเคชันด้วยเทคโนโลยีล่าสุด ที่ตอบสนองความต้องการของธุรกิจในยุคดิจิทัล",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Responsive Design ที่ใช้งานได้ทุกอุปกรณ์",
        "Modern Frameworks (React, Next.js, Vue.js)",
        "Database Integration และ API Development", 
        "Performance Optimization และ SEO",
        "Progressive Web App (PWA)",
        "Cloud Hosting และ DevOps",
        "Security Best Practices",
        "Analytics และ Monitoring"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "AWS", "Docker"],
      process: [
        {
          step: "01",
          title: "Requirements Analysis",
          description: "วิเคราะห์ความต้องการและกำหนด scope ของโปรเจกต์"
        },
        {
          step: "02", 
          title: "Design & Wireframe",
          description: "ออกแบบ UI/UX และสร้าง wireframe"
        },
        {
          step: "03",
          title: "Development",
          description: "พัฒนาระบบตาม specification ที่กำหนด"
        },
        {
          step: "04",
          title: "Testing & Deployment",
          description: "ทดสอบระบบและ deploy ขึ้น production"
        }
      ],
      pricing: [
        {
          name: "Basic Website",
          price: "฿25,000 - ฿50,000",
          duration: "2-4 สัปดาห์",
          features: ["5-10 หน้า", "Responsive Design", "Contact Form", "SEO พื้นฐาน"]
        },
        {
          name: "Business Website",
          price: "฿50,000 - ฿150,000",
          duration: "1-2 เดือน",
          features: ["ไม่จำกัดหน้า", "CMS System", "E-commerce Ready", "Advanced SEO"]
        },
        {
          name: "Web Application",
          price: "฿150,000+",
          duration: "2-6 เดือน",
          features: ["Custom Development", "Database Integration", "API Development", "Admin Panel"]
        }
      ],
      testimonials: [
        {
          name: "คุณสมชาย ใจดี",
          company: "TechCorp Thailand",
          text: "เว็บไซต์ที่พัฒนาให้เราช่วยเพิ่มยอดขายออนไลน์ขึ้น 200% ในไตรมาสแรก",
          rating: 5
        }
      ]
    },
    'ui-ux-design': {
      icon: <FaPalette />,
      title: "UI/UX Design",
      subtitle: "ออกแบบประสบการณ์ผู้ใช้ที่สวยงามและใช้งานง่าย",
      description: "เราออกแบบ User Interface และ User Experience ที่ตอบโจทย์ผู้ใช้และเพิ่มประสิทธิภาพธุรกิจ",
      color: "from-purple-500 to-pink-500",
      features: [
        "User Research และ User Persona",
        "Information Architecture",
        "Wireframe และ Prototyping",
        "Visual Design และ Branding",
        "Usability Testing",
        "Design System และ Style Guide",
        "Mobile-First Design",
        "Accessibility (WCAG Guidelines)"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Principle", "InVision", "Miro"],
      process: [
        {
          step: "01",
          title: "Research & Discovery",
          description: "ศึกษาผู้ใช้เป้าหมายและ competitive analysis"
        },
        {
          step: "02",
          title: "Information Architecture",
          description: "จัดระเบียบข้อมูลและโครงสร้างเนื้อหา"
        },
        {
          step: "03",
          title: "Wireframe & Prototype",
          description: "สร้าง wireframe และ interactive prototype"
        },
        {
          step: "04",
          title: "Visual Design",
          description: "ออกแบบ visual elements และ design system"
        }
      ],
      pricing: [
        {
          name: "UI Design",
          price: "฿15,000 - ฿30,000",
          duration: "1-2 สัปดาห์",
          features: ["5-10 หน้าจอ", "Mobile + Desktop", "Design System", "Prototype"]
        },
        {
          name: "UX Research + Design",
          price: "฿30,000 - ฿80,000",
          duration: "2-4 สัปดาห์",
          features: ["User Research", "Wireframe", "Usability Testing", "Complete Design"]
        },
        {
          name: "Complete Design System",
          price: "฿80,000+",
          duration: "1-2 เดือน",
          features: ["Brand Guidelines", "Component Library", "Design Tokens", "Documentation"]
        }
      ],
      testimonials: [
        {
          name: "คุณสุภา วิสาหกิจ",
          company: "Fashion Forward",
          text: "การออกแบบ UI/UX ที่ทำให้ช่วยเพิ่มการ conversion rate ขึ้น 45%",
          rating: 5
        }
      ]
    },
    'digital-marketing': {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      subtitle: "กลยุทธ์การตลาดดิจิทัลเพื่อเพิ่มยอดขาย",
      description: "เราให้บริการการตลาดดิจิทัลแบบครบวงจร เพื่อเพิ่มการรับรู้แบรนด์และยอดขาย",
      color: "from-green-500 to-teal-500",
      features: [
        "Search Engine Optimization (SEO)",
        "Google Ads และ Facebook Ads Management",
        "Social Media Marketing",
        "Content Marketing และ Copywriting",
        "Email Marketing Automation",
        "Analytics และ Performance Tracking",
        "Conversion Rate Optimization",
        "Influencer Marketing"
      ],
      technologies: ["Google Analytics", "Google Ads", "Facebook Business", "HubSpot", "Mailchimp", "SEMrush", "Ahrefs", "Hootsuite"],
      process: [
        {
          step: "01",
          title: "Market Analysis",
          description: "วิเคราะห์ตลาดและคู่แข่ง target audience"
        },
        {
          step: "02",
          title: "Strategy Planning",
          description: "วางแผนกลยุทธ์และเลือก channels ที่เหมาะสม"
        },
        {
          step: "03",
          title: "Campaign Execution",
          description: "ดำเนินแคมเปญตามแผนที่วางไว้"
        },
        {
          step: "04",
          title: "Monitoring & Optimization",
          description: "ติดตามผลและปรับปรุงแคมเปญอย่างต่อเนื่อง"
        }
      ],
      pricing: [
        {
          name: "SEO Package",
          price: "฿15,000 - ฿30,000/เดือน",
          duration: "6-12 เดือน",
          features: ["Keyword Research", "On-page SEO", "Content Creation", "Monthly Report"]
        },
        {
          name: "Ads Management",
          price: "฿20,000 - ฿50,000/เดือน",
          duration: "3-6 เดือน",
          features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "Performance Report"]
        },
        {
          name: "Full Digital Marketing",
          price: "฿50,000+/เดือน",
          duration: "6-12 เดือน",
          features: ["SEO + Ads", "Social Media", "Content Marketing", "Analytics Dashboard"]
        }
      ],
      testimonials: [
        {
          name: "คุณวิชัย นวัตกรรม",
          company: "Green Energy Co.",
          text: "การทำ digital marketing ช่วยเพิ่ม leads คุณภาพขึ้น 180% ภายใน 6 เดือน",
          rating: 5
        }
      ]
    },
    'erp-systems': {
      icon: <FaCog />,
      title: "ERP Systems",
      subtitle: "ระบบบริหารจัดการองค์กรแบบครบวงจร",
      description: "พัฒนาระบบ ERP ที่ช่วยเพิ่มประสิทธิภาพการทำงานและลดต้นทุนการดำเนินงาน",
      color: "from-orange-500 to-red-500",
      features: [
        "Accounting และ Financial Management",
        "Inventory และ Supply Chain Management",
        "Human Resource Management",
        "Customer Relationship Management (CRM)",
        "Project Management",
        "Reporting และ Business Intelligence",
        "Multi-location Support",
        "Mobile Access และ Cloud Integration"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "React", "Docker", "AWS", "Redis", "Elasticsearch"],
      process: [
        {
          step: "01",
          title: "Business Analysis",
          description: "วิเคราะห์กระบวนการทำงานปัจจุบัน"
        },
        {
          step: "02",
          title: "System Design",
          description: "ออกแบบระบบให้เหมาะกับธุรกิจ"
        },
        {
          step: "03",
          title: "Development & Testing",
          description: "พัฒนาและทดสอบระบบอย่างละเอียด"
        },
        {
          step: "04",
          title: "Implementation & Training",
          description: "ติดตั้งระบบและฝึกอบรมผู้ใช้งาน"
        }
      ],
      pricing: [
        {
          name: "Small Business ERP",
          price: "฿200,000 - ฿500,000",
          duration: "3-6 เดือน",
          features: ["Accounting", "Inventory", "Basic CRM", "5 Users"]
        },
        {
          name: "Medium Business ERP",
          price: "฿500,000 - ฿1,500,000",
          duration: "6-12 เดือน",
          features: ["Full Modules", "Advanced Reports", "API Integration", "50 Users"]
        },
        {
          name: "Enterprise ERP",
          price: "฿1,500,000+",
          duration: "12-18 เดือน",
          features: ["Custom Development", "Multi-company", "Advanced BI", "Unlimited Users"]
        }
      ],
      testimonials: [
        {
          name: "คุณประจักษ์ จัดการดี",
          company: "Manufacturing Plus",
          text: "ระบบ ERP ช่วยลดเวลาการทำงานลง 60% และเพิ่มความแม่นยำของข้อมูล",
          rating: 5
        }
      ]
    },
    'game-development': {
      icon: <FaGamepad />,
      title: "Game Development",
      subtitle: "พัฒนาเกมและแอปพลิเคชันอินเทอร์แอคทีฟ",
      description: "สร้างเกมและแอปพลิเคชันอินเทอร์แอคทีฟที่น่าสนใจสำหรับทุกแพลตฟอร์ม",
      color: "from-indigo-500 to-purple-500",
      features: [
        "2D และ 3D Game Development",
        "Mobile Games (iOS/Android)",
        "Web Games และ HTML5 Games",
        "AR/VR Applications",
        "Interactive Media และ Presentations",
        "Gamification Solutions",
        "Game Monetization Strategies",
        "Cross-platform Development"
      ],
      technologies: ["Unity", "Unreal Engine", "React Native", "Three.js", "Blender", "C#", "JavaScript", "WebGL"],
      process: [
        {
          step: "01",
          title: "Concept & Design",
          description: "พัฒนาแนวคิดเกมและออกแบบ gameplay"
        },
        {
          step: "02",
          title: "Art & Assets Creation",
          description: "สร้าง art assets และ game objects"
        },
        {
          step: "03",
          title: "Programming & Integration",
          description: "เขียนโปรแกรมและรวม assets เข้าด้วยกัน"
        },
        {
          step: "04",
          title: "Testing & Publishing",
          description: "ทดสอบเกมและเผยแพร่บน app stores"
        }
      ],
      pricing: [
        {
          name: "Simple 2D Game",
          price: "฿100,000 - ฿300,000",
          duration: "2-4 เดือน",
          features: ["2D Graphics", "Basic Gameplay", "Mobile Ready", "Sound Effects"]
        },
        {
          name: "Advanced Mobile Game",
          price: "฿300,000 - ฿800,000",
          duration: "4-8 เดือน",
          features: ["3D Graphics", "Multiplayer", "In-app Purchases", "Analytics"]
        },
        {
          name: "Custom Game Solution",
          price: "฿800,000+",
          duration: "6-12 เดือน",
          features: ["Custom Engine", "AR/VR Support", "Backend Services", "Full Publishing"]
        }
      ],
      testimonials: [
        {
          name: "คุณสมศักดิ์ เล่นเก่ง",
          company: "GameStudio Co.",
          text: "เกมที่พัฒนาให้มี download rate สูงมากและได้รับรีวิวดีจากผู้เล่น",
          rating: 5
        }
      ]
    },
    'mobile-apps': {
      icon: <FaMobile />,
      title: "Mobile Apps",
      subtitle: "แอปพลิเคชันมือถือสำหรับ iOS และ Android",
      description: "พัฒนาแอปพลิเคชันมือถือที่ทันสมัยและใช้งานง่าย รองรับทั้ง iOS และ Android",
      color: "from-pink-500 to-rose-500",
      features: [
        "Native iOS และ Android Apps",
        "Cross-platform Development (React Native, Flutter)",
        "App Store Optimization (ASO)",
        "Push Notifications และ Real-time Features",
        "Offline Functionality",
        "In-app Purchases และ Subscriptions",
        "Social Login Integration",
        "Analytics และ Crash Reporting"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify", "Redux", "GraphQL"],
      process: [
        {
          step: "01",
          title: "Requirements & Wireframe",
          description: "กำหนดความต้องการและออกแบบ wireframe"
        },
        {
          step: "02",
          title: "UI/UX Design",
          description: "ออกแบบ interface ให้เหมาะกับแต่ละแพลตฟอร์ม"
        },
        {
          step: "03",
          title: "Development & Testing",
          description: "พัฒนาแอปและทดสอบบนอุปกรณ์จริง"
        },
        {
          step: "04",
          title: "App Store Submission",
          description: "เตรียมและส่งแอปขึ้น App Store และ Play Store"
        }
      ],
      pricing: [
        {
          name: "Simple App",
          price: "฿80,000 - ฿200,000",
          duration: "2-3 เดือน",
          features: ["Basic Features", "iOS + Android", "Simple Backend", "App Store Submission"]
        },
        {
          name: "Business App",
          price: "฿200,000 - ฿500,000",
          duration: "3-6 เดือน",
          features: ["Advanced Features", "API Integration", "Push Notifications", "Analytics"]
        },
        {
          name: "Enterprise App",
          price: "฿500,000+",
          duration: "6-12 เดือน",
          features: ["Custom Development", "Security Features", "Scalable Backend", "Maintenance"]
        }
      ],
      testimonials: [
        {
          name: "คุณนิดา อร่อยดี",
          company: "FoodieHub",
          text: "แอปสั่งอาหารที่พัฒนาให้มี user retention rate สูงถึง 85%",
          rating: 5
        }
      ]
    }
  };

  const currentService = serviceData[serviceType];

  if (!currentService) {
    return (
      <div className="min-h-screen bg-black text-white font-prompt flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">ไม่พบบริการที่ต้องการ</h1>
          <Link to="/service" className="text-blue-400 hover:text-blue-300">
            กลับไปหน้าบริการ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-prompt relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl animate-pulse delay-3000"></div>
        
        {/* Interactive Mouse Follower */}
        <div 
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        
        {/* Moving Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            <div className="w-full h-full animate-ping"></div>
          </div>
        ))}
        
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-service-detail" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-service-detail)" />
          </svg>
        </div>
        
        {/* Animated Light Rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent transform -skew-x-12 animate-pulse delay-500"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/15 to-transparent transform skew-x-12 animate-pulse delay-1500"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent transform -skew-x-6 animate-pulse delay-2500"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/6 w-4 h-4 border border-blue-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 border border-purple-400/15 animate-bounce-slow delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/6 w-5 h-5 border border-pink-400/15 rotate-12 animate-ping delay-3000"></div>
        
        {/* Gradient Waves */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-purple-900/5 to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-blue-900/20 to-transparent z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/service"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <FaArrowLeft className="text-sm" />
              กลับไปหน้าบริการ
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 text-4xl bg-gradient-to-r ${currentService.color} text-white`}>
              {currentService.icon}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              {currentService.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {currentService.subtitle}
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {currentService.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">คุณสมบัติหลัก</h2>
            <p className="text-gray-300 text-lg">
              สิ่งที่คุณจะได้รับจากบริการของเรา
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentService.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-400 text-sm mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-blue-900/10 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">เทคโนโลยีที่ใช้</h2>
            <p className="text-gray-300 text-lg">
              เครื่องมือและเทคโนโลยีชั้นนำที่เราใช้งาน
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {currentService.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-full text-gray-300 hover:border-blue-500/50 transition-colors duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">กระบวนการทำงาน</h2>
            <p className="text-gray-300 text-lg">
              ขั้นตอนการทำงานที่มีคุณภาพและมาตรฐาน
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentService.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-400 font-bold text-lg">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">แพ็กเกจและราคา</h2>
            <p className="text-gray-300 text-lg">
              เลือกแพ็กเกจที่เหมาะสมกับความต้องการ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentService.pricing.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{pkg.name}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">{pkg.price}</div>
                <div className="flex items-center gap-2 text-gray-400 mb-6">
                  <FaClock className="text-sm" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <FaCheckCircle className="text-green-400 text-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium">
                  เลือกแพ็กเกจนี้
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">เสียงจากลูกค้า</h2>
            <p className="text-gray-300 text-lg">
              ความคิดเห็นจากลูกค้าที่ใช้บริการ
            </p>
          </motion.div>

          <div className="space-y-8">
            {currentService.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
                className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8 text-center"
              >
                <FaQuoteLeft className="text-blue-400/30 text-3xl mx-auto mb-4" />
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-blue-400">{testimonial.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              พร้อมเริ่มต้นโปรเจกต์แล้วหรือยัง?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              ปรึกษาทีมผู้เชี่ยวชาญของเราได้ฟรี เพื่อหาโซลูชันที่เหมาะสมที่สุด
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium flex items-center justify-center gap-2"
              >
                <FaRocket />
                เริ่มต้นโปรเจกต์
              </Link>
              <button className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors duration-200 font-medium">
                ขอใบเสนอราคา
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail; 