import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers, FaCog, FaCode, FaPalette, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
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

  const values = [
    {
      icon: <FaLightbulb />,
      title: "นวัตกรรม",
      description: "สร้างสรรค์เทคโนโลยีใหม่ๆ ที่ตอบโจทย์ธุรกิจยุคดิจิทัล"
    },
    {
      icon: <FaUsers />,
      title: "ทีมงานมืออาชีพ",
      description: "นักพัฒนาและนักออกแบบที่มีประสบการณ์และความเชี่ยวชาญ"
    },
    {
      icon: <FaCog />,
      title: "คุณภาพสูง",
      description: "มุ่งมั่นในการส่งมอบงานที่มีคุณภาพและตรงตามความต้องการ"
    },
    {
      icon: <FaRocket />,
      title: "การเติบโต",
      description: "ช่วยให้ธุรกิจของคุณเติบโตและก้าวสู่ความสำเร็จอย่างยั่งยืน"
    }
  ];

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "พัฒนาเว็บไซต์และเว็บแอปพลิเคชันที่ทันสมัย"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "ออกแบบประสบการณ์ผู้ใช้ที่สวยงามและใช้งานง่าย"
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description: "กลยุทธ์การตลาดดิจิทัลเพื่อเพิ่มยอดขาย"
    }
  ];

  const teamStats = [
    { number: "50+", label: "โปรเจกต์สำเร็จ" },
    { number: "30+", label: "ลูกค้าพึงพอใจ" },
    { number: "5+", label: "ปีประสบการณ์" },
    { number: "15+", label: "ทีมงานมืออาชีพ" }
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
              <pattern id="grid-about" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-about)" />
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
              เกี่ยวกับเรา
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              เราคือทีมนักสร้างสรรค์และนักพัฒนาที่มุ่งมั่นสร้างโซลูชันดิจิทัล
              ที่ช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">พันธกิจของเรา</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                สร้างสรรค์โซลูชันเทคโนโลยีที่ช่วยให้ธุรกิจของลูกค้าเติบโตและประสบความสำเร็จ 
                ด้วยการนำเสนอบริการที่มีคุณภาพสูง นวัตกรรมใหม่ๆ 
                และการดูแลลูกค้าอย่างใกล้ชิดตลอดการให้บริการ
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-400">วิสัยทัศน์</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                เป็นบริษัทเทคโนโลยีชั้นนำที่สร้างการเปลี่ยนแปลงเชิงบวกให้กับสังคม
                ผ่านการพัฒนาโซลูชันดิจิทัลที่ทันสมัย มีประสิทธิภาพ 
                และตอบโจทย์ความต้องการของลูกค้าในยุคดิจิทัล
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-blue-900/10 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">หลักการทำงานของเรา</h2>
            <p className="text-gray-300 text-lg">
              ค่านิยมที่เป็นรากฐานสำคัญในการดำเนินธุรกิจ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4 text-blue-400 text-2xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">บริการหลักของเรา</h2>
            <p className="text-gray-300 text-lg">
              โซลูชันครบวงจรสำหรับธุรกิจดิจิทัล
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-500/30 rounded-xl p-8 hover:from-blue-900/20 hover:to-purple-900/20 transition-all duration-300"
              >
                <div className="text-blue-400 text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">ผลงานของเรา</h2>
            <p className="text-gray-300 text-lg">
              ตัวเลขที่สะท้อนความสำเร็จในการให้บริการ
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
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
            transition={{ delay: 1.5 }}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              พร้อมที่จะเริ่มต้นโปรเจกต์กับเรา?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              ไม่ว่าจะเป็นการพัฒนาเว็บไซต์ แอปพลิเคชัน หรือการออกแบบ UI/UX 
              เรายินดีที่จะช่วยให้ความฝันของคุณกลายเป็นจริง
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium">
                ติดต่อเรา
              </button>
              <button className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors duration-200 font-medium">
                ดูผลงานของเรา
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 