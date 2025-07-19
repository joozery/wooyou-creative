import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaBuilding, 
  FaUsers, 
  FaHandshake, 
  FaAward,
  FaChartLine,
  FaTrophy,
  FaRocket,
  FaHeart,
  FaGlobe,
  FaIndustry
} from 'react-icons/fa';

const Customer = () => {
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

  const clients = [
    {
      name: "TechCorp Thailand",
      industry: "เทคโนโลยี",
      logo: "🚀",
      description: "บริษัทเทคโนโลยีชั้นนำ",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Green Energy Co.",
      industry: "พลังงาน",
      logo: "🌱",
      description: "บริษัทพลังงานสะอาด",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Fashion Forward",
      industry: "แฟชั่น",
      logo: "👗",
      description: "แบรนด์แฟชั่นระดับโลก",
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "FoodieHub",
      industry: "อาหาร",
      logo: "🍽️",
      description: "แพลตฟอร์มสั่งอาหารออนไลน์",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "EduTech Solutions",
      industry: "การศึกษา",
      logo: "📚",
      description: "แพลตฟอร์มการเรียนรู้ออนไลน์",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "HealthCare Plus",
      industry: "สุขภาพ",
      logo: "🏥",
      description: "ระบบการดูแลสุขภาพดิจิทัล",
      color: "from-emerald-500 to-green-500"
    }
  ];

  const testimonials = [
    {
      name: "คุณสมชาย ใจดี",
      position: "CEO, TechCorp Thailand",
      company: "TechCorp",
      rating: 5,
      text: "WooYou Creative ช่วยเราพัฒนาระบบ ERP ที่เพิ่มประสิทธิภาพการทำงานขึ้น 300% ทีมงานมืออาชีพมาก ให้คำปรึกษาที่ดีและติดตามผลอย่างใกล้ชิด",
      image: "👨‍💼",
      project: "ระบบ ERP ครบวงจร"
    },
    {
      name: "คุณสุภา วิสาหกิจ",
      position: "Marketing Director, Fashion Forward",
      company: "Fashion Forward",
      rating: 5,
      text: "เว็บไซต์ที่ WooYou สร้างให้เราทำให้ยอดขายออนไลน์เพิ่มขึ้น 250% ในไตรมาสแรก! การออกแบบสวยงามและใช้งานง่าย ลูกค้าชอบมาก",
      image: "👩‍💼",
      project: "E-commerce Website"
    },
    {
      name: "คุณวิชัย นวัตกรรม",
      position: "CTO, Green Energy Co.",
      company: "Green Energy",
      rating: 5,
      text: "ระบบ IoT ที่พัฒนาให้เราสามารถติดตามและควบคุมโซลาร์ฟาร์มได้แบบ real-time ประหยัดค่าใช้จ่ายและเพิ่มประสิทธิภาพได้อย่างมาก",
      image: "👨‍🔬",
      project: "IoT Monitoring System"
    },
    {
      name: "คุณนิดา อร่อยดี",
      position: "Founder, FoodieHub",
      company: "FoodieHub",
      rating: 5,
      text: "แอปสั่งอาหารที่ทำให้มีความเร็วในการประมวลผลสูง รองรับลูกค้าได้พร้อมกันมากกว่า 10,000 คน ไม่เคยมีปัญหาเซิร์ฟเวอร์ล่ม",
      image: "👩‍🍳",
      project: "Food Delivery App"
    }
  ];

  const caseStudies = [
    {
      client: "TechCorp Thailand",
      project: "Digital Transformation",
      challenge: "ปรับปรุงระบบเก่าที่ล้าสมัยและไม่มีประสิทธิภาพ",
      solution: "พัฒนาระบบ ERP แบบ cloud-based ที่ทันสมัย",
      results: [
        "เพิ่มประสิทธิภาพ 300%",
        "ลดต้นทุนดำเนินการ 40%", 
        "ปรับปรุงความพึงพอใจพนักงาน 85%"
      ],
      duration: "6 เดือน",
      technology: ["React", "Node.js", "MongoDB", "AWS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      client: "Fashion Forward",
      project: "E-commerce Platform",
      challenge: "ต้องการแพลตฟอร์มขายออนไลน์ที่รองรับการเติบโตอย่างรวดเร็ว",
      solution: "สร้าง e-commerce platform ที่ scalable พร้อม AI recommendation",
      results: [
        "เพิ่มยอดขาย 250%",
        "ลดการ abandon cart 35%",
        "เพิ่มความพึงพอใจลูกค้า 90%"
      ],
      duration: "4 เดือน",
      technology: ["Next.js", "Shopify Plus", "AI/ML", "Stripe"],
      color: "from-pink-500 to-purple-500"
    },
    {
      client: "Green Energy Co.",
      project: "IoT Monitoring System",
      challenge: "จำเป็นต้องติดตามโซลาร์ฟาร์มแบบ real-time จากระยะไกล",
      solution: "พัฒนาระบบ IoT monitoring พร้อม predictive analytics",
      results: [
        "เพิ่มประสิทธิภาพการผลิต 45%",
        "ลดเวลาบำรุงรักษา 60%",
        "ประหยัดต้นทุน 30%"
      ],
      duration: "8 เดือน",
      technology: ["IoT", "Python", "TensorFlow", "Azure"],
      color: "from-green-500 to-teal-500"
    }
  ];

  const stats = [
    { number: "150+", label: "ลูกค้าพึงพอใจ", icon: <FaHeart /> },
    { number: "98%", label: "ความพึงพอใจ", icon: <FaStar /> },
    { number: "24/7", label: "การสนับสนุน", icon: <FaHandshake /> },
    { number: "5", label: "ปี ประสบการณ์", icon: <FaTrophy /> }
  ];

  const industries = [
    { name: "เทคโนโลยี", icon: <FaRocket />, count: "35+ โปรเจกต์" },
    { name: "การเงิน", icon: <FaChartLine />, count: "28+ โปรเจกต์" },
    { name: "การศึกษา", icon: "📚", count: "22+ โปรเจกต์" },
    { name: "สุขภาพ", icon: "🏥", count: "18+ โปรเจกต์" },
    { name: "อีคอมเมิร์ซ", icon: "🛒", count: "45+ โปรเจกต์" },
    { name: "อุตสาหกรรม", icon: <FaIndustry />, count: "15+ โปรเจกต์" }
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
              <pattern id="grid-customer" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-customer)" />
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
              ลูกค้าของเรา
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              ความไว้วางใจจากลูกค้ามากกว่า 150+ ราย
              ในอุตสาหกรรมหลากหลายทั่วโลก
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-blue-400 text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">ลูกค้าที่ไว้วางใจ</h2>
            <p className="text-gray-300 text-lg">
              บริษัทชั้นนำที่เลือกใช้บริการของเรา
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group relative bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">{client.logo}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{client.name}</h3>
                  <div className="text-blue-400 text-sm font-medium mb-2">{client.industry}</div>
                  <p className="text-gray-400 text-sm">{client.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-blue-900/10 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">อุตสาหกรรมที่เราให้บริการ</h2>
            <p className="text-gray-300 text-lg">
              ประสบการณ์ในการให้บริการหลากหลายอุตสาหกรรม
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-blue-400 text-2xl">{industry.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold">{industry.name}</h3>
                    <p className="text-gray-400 text-sm">{industry.count}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">เสียงจากลูกค้า</h2>
            <p className="text-gray-300 text-lg">
              ความคิดเห็นและประสบการณ์จากลูกค้าที่ใช้บริการจริง
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.position}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <FaQuoteLeft className="text-blue-400/30 text-2xl mb-3" />
                <p className="text-gray-300 leading-relaxed mb-4">
                  {testimonial.text}
                </p>
                <div className="border-t border-gray-700 pt-3">
                  <p className="text-blue-400 text-sm font-medium">
                    โปรเจกต์: {testimonial.project}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">Case Studies</h2>
            <p className="text-gray-300 text-lg">
              ตัวอย่างความสำเร็จที่เราภูมิใจ
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.2 }}
                className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.client}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${study.color} text-white mb-4`}>
                      {study.project}
                    </div>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    <div className="text-blue-400 text-sm">
                      <strong>ระยะเวลา:</strong> {study.duration}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">โซลูชัน</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.technology.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">ผลลัพธ์</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-2 text-gray-300">
                          <FaTrophy className="text-green-400 text-sm" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
            transition={{ delay: 2.2 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              พร้อมเป็นลูกค้าคนต่อไปของเราแล้วหรือยัง?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              มาร่วมเป็นส่วนหนึ่งของความสำเร็จ และสร้างผลงานที่ยอดเยี่ยมไปด้วยกัน
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium flex items-center justify-center gap-2">
                <FaHandshake />
                เริ่มต้นร่วมงาน
              </button>
              <button className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors duration-200 font-medium">
                ดูผลงานเพิ่มเติม
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Customer; 