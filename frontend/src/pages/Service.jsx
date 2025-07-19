import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaPalette, 
  FaChartLine, 
  FaCog, 
  FaGamepad, 
  FaMobile,
  FaSearch,
  FaRocket,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const Service = () => {
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

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "พัฒนาเว็บไซต์และเว็บแอปพลิเคชันที่ทันสมัย รวดเร็ว และปลอดภัย",
      features: [
        "Responsive Design",
        "Modern Frameworks (React, Next.js)",
        "Database Integration", 
        "API Development",
        "Performance Optimization"
      ],
      color: "from-blue-500 to-cyan-500",
      slug: "web-development"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "ออกแบบประสบการณ์ผู้ใช้ที่สวยงาม ใช้งานง่าย และตอบโจทย์ธุรกิจ",
      features: [
        "User Research & Analysis",
        "Wireframe & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design System"
      ],
      color: "from-purple-500 to-pink-500",
      slug: "ui-ux-design"
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description: "กลยุทธ์การตลาดดิจิทัลเพื่อเพิ่มยอดขายและสร้างการรับรู้แบรนด์",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Google Ads Management",
        "Content Marketing",
        "Analytics & Reporting"
      ],
      color: "from-green-500 to-teal-500",
      slug: "digital-marketing"
    },
    {
      icon: <FaCog />,
      title: "ERP Systems",
      description: "ระบบบริหารจัดการองค์กรแบบครบวงจร เพิ่มประสิทธิภาพการทำงาน",
      features: [
        "Custom ERP Development",
        "System Integration",
        "Data Migration",
        "Training & Support",
        "Cloud Solutions"
      ],
      color: "from-orange-500 to-red-500",
      slug: "erp-systems"
    },
    {
      icon: <FaGamepad />,
      title: "Game Development",
      description: "พัฒนาเกมและแอปพลิเคชันอินเทอร์แอคทีฟที่น่าสนใจและสร้างสรรค์",
      features: [
        "2D/3D Game Development",
        "Mobile Games",
        "AR/VR Applications",
        "Interactive Media",
        "Gamification"
      ],
      color: "from-indigo-500 to-purple-500",
      slug: "game-development"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Apps",
      description: "แอปพลิเคชันมือถือสำหรับ iOS และ Android ที่ทันสมัยและใช้งานง่าย",
      features: [
        "Native iOS/Android Apps",
        "Cross-platform Development",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality"
      ],
      color: "from-pink-500 to-rose-500",
      slug: "mobile-apps"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "วิเคราะห์ความต้องการและวางแผนโปรเจกต์อย่างละเอียด",
      icon: <FaSearch />
    },
    {
      step: "02", 
      title: "Design & Prototype",
      description: "ออกแบบและสร้าง prototype เพื่อทดสอบแนวคิด",
      icon: <FaPalette />
    },
    {
      step: "03",
      title: "Development",
      description: "พัฒนาระบบตามแบบที่ออกแบบไว้อย่างมีคุณภาพ",
      icon: <FaCode />
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "ทดสอบระบบและเปิดใช้งานจริงพร้อมให้การสนับสนุน",
      icon: <FaRocket />
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "฿25,000",
      description: "เหมาะสำหรับธุรกิจเริ่มต้น",
      features: [
        "เว็บไซต์ 5 หน้า",
        "Responsive Design",
        "SEO พื้นฐาน",
        "Form ติดต่อ",
        "การสนับสนุน 3 เดือน"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "฿75,000",
      description: "เหมาะสำหรับธุรกิจขนาดกลาง",
      features: [
        "เว็บไซต์ไม่จำกัดหน้า",
        "Custom Design",
        "CMS System",
        "E-commerce Ready",
        "การสนับสนุน 6 เดือน"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "฿150,000+",
      description: "เหมาะสำหรับองค์กรขนาดใหญ่",
      features: [
        "Web Application",
        "Custom Development",
        "API Integration",
        "Cloud Hosting",
        "การสนับสนุน 1 ปี"
      ],
      popular: false
    }
  ];

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
              <pattern id="grid-service" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-service)" />
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              บริการของเรา
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              โซลูชันเทคโนโลยีครบวงจรที่ช่วยให้ธุรกิจของคุณเติบโต
              และประสบความสำเร็จในยุคดิจิทัล
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">บริการหลักของเรา</h2>
            <p className="text-gray-300 text-lg">
              เราให้บริการพัฒนาเทคโนโลยีที่หลากหลายตามความต้องการของลูกค้า
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-blue-400 text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <FaCheckCircle className="text-green-400 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={`/service/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                  >
                    ดูรายละเอียด
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-blue-900/10 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">กระบวนการทำงาน</h2>
            <p className="text-gray-300 text-lg">
              ขั้นตอนการทำงานที่มีคุณภาพและได้มาตรฐาน
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4 text-blue-400 text-2xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
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
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">แพ็กเกจบริการ</h2>
            <p className="text-gray-300 text-lg">
              เลือกแพ็กเกจที่เหมาะสมกับความต้องการของคุณ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                  pkg.popular 
                    ? 'border-blue-500 bg-gradient-to-b from-blue-900/30 to-purple-900/30' 
                    : 'border-gray-700 bg-gray-900/50 hover:border-blue-500/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      แนะนำ
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{pkg.price}</div>
                  <p className="text-gray-400 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <FaCheckCircle className="text-green-400 text-sm" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-medium transition-colors duration-200 ${
                    pkg.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'border border-blue-500 text-blue-400 hover:bg-blue-500/10'
                  }`}>
                    เลือกแพ็กเกจนี้
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              พร้อมเริ่มต้นโปรเจกต์ของคุณแล้วหรือยัง?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              ปรึกษาทีมผู้เชี่ยวชาญของเราได้ฟรี เพื่อหาโซลูชันที่เหมาะสมกับธุรกิจของคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium flex items-center justify-center gap-2">
                <FaRocket />
                เริ่มต้นโปรเจกต์
              </button>
              <button className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors duration-200 font-medium">
                ปรึกษาฟรี
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Service; 