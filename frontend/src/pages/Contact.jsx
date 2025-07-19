import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaQuestionCircle,
  FaCheckCircle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "โทรศัพท์",
      value: "+66 (0) 2-XXX-XXXX",
      detail: "จันทร์-ศุกร์ 9:00-18:00"
    },
    {
      icon: <FaEnvelope />,
      title: "อีเมล",
      value: "hello@wooyoucreative.com",
      detail: "ตอบกลับภายใน 24 ชั่วโมง"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "ที่อยู่",
      value: "123 ถนนสุขุมวิท แขวงคลองตัน",
      detail: "เขตวัฒนา กรุงเทพมหานคร 10110"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+66 8X-XXX-XXXX",
      detail: "สำหรับการติดต่อด่วน"
    }
  ];

  const services = [
    "Web Development",
    "UI/UX Design", 
    "Digital Marketing",
    "ERP Systems",
    "Mobile Apps",
    "Game Development",
    "Consulting",
    "อื่นๆ"
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, name: "Facebook", color: "hover:bg-blue-600" },
    { icon: <FaTwitter />, name: "Twitter", color: "hover:bg-sky-500" },
    { icon: <FaInstagram />, name: "Instagram", color: "hover:bg-pink-500" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", color: "hover:bg-blue-700" }
  ];

  const faqs = [
    {
      question: "ระยะเวลาในการพัฒนาโปรเจกต์เป็นอย่างไร?",
      answer: "ขึ้นอยู่กับความซับซ้อนของโปรเจกต์ โดยทั่วไปเว็บไซต์ทั่วไป 2-4 สัปดาห์ เว็บแอปพลิเคชัน 2-6 เดือน"
    },
    {
      question: "มีการรับประกันหลังส่งมอบงานหรือไม่?",
      answer: "ใช่ครับ เรามีการรับประกันและการสนับสนุน 3-12 เดือน ตามแพ็กเกจที่เลือก พร้อมการอัปเดตและแก้ไขปัญหา"
    },
    {
      question: "สามารถขอใบเสนอราคาได้อย่างไร?",
      answer: "กรอกแบบฟอร์มด้านบนหรือติดต่อเราโดยตรง ทีมงานจะติดต่อกลับเพื่อสอบถามรายละเอียดและส่งใบเสนอราคา"
    },
    {
      question: "มีการผ่อนชำระได้หรือไม่?",
      answer: "ได้ครับ เรามีระบบการชำระเงินแบบแบ่งงวด เช่น 50% เริ่มงาน 50% ส่งมอบ หรือตามที่ตกลงกัน"
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
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
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
              ติดต่อเรา
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              พร้อมให้คำปรึกษาและรับฟังไอเดียของคุณ
              มาร่วมสร้างสรรค์โปรเจกต์ที่ยอดเยี่ยมไปด้วยกัน
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">ส่งข้อความถึงเรา</h2>
              <p className="text-gray-300 mb-8">
                กรอกข้อมูลด้านล่าง เราจะติดต่อกลับภายใน 24 ชั่วโมง
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <FaCheckCircle className="text-green-400 text-6xl mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-400 mb-2">ส่งข้อความสำเร็จ!</h3>
                  <p className="text-gray-300">เราจะติดต่อกลับภายใน 24 ชั่วโมง</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <FaUser className="inline mr-2" />
                        ชื่อ-นามสกุล *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="กรอกชื่อ-นามสกุล"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <FaEnvelope className="inline mr-2" />
                        อีเมล *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <FaBuilding className="inline mr-2" />
                        บริษัท/องค์กร
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="ชื่อบริษัทหรือองค์กร"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <FaPhone className="inline mr-2" />
                        เบอร์โทรศัพท์
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="08X-XXX-XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      บริการที่สนใจ
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option value="">เลือกบริการที่สนใจ</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      รายละเอียดโปรเจกต์ *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="บอกเราเกี่ยวกับโปรเจกต์ของคุณ เป้าหมาย งบประมาณ และข้อกำหนดอื่นๆ"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        กำลังส่ง...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        ส่งข้อความ
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-xl">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-blue-400 font-medium">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-blue-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">เวลาทำการ</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">จันทร์ - ศุกร์</span>
                  <span className="text-blue-400 font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">เสาร์</span>
                  <span className="text-blue-400 font-medium">09:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">อาทิตย์</span>
                  <span className="text-gray-400">ปิด</span>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-gray-900/30 border border-gray-700/50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">ติดตามเราได้ที่</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:transform hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">ที่ตั้งสำนักงาน</h2>
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-2">
            <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt className="text-blue-400 text-6xl mx-auto mb-4" />
                <p className="text-gray-300 text-lg">แผนที่ Google Maps</p>
                <p className="text-gray-400 text-sm">123 ถนนสุขุมวิท แขวงคลองตัน เขตวัฒนา กรุงเทพฯ</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">คำถามที่พบบ่อย</h2>
            <p className="text-gray-300 text-lg">คำตอบสำหรับคำถามที่ลูกค้าถามบ่อย</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                    <FaQuestionCircle />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-center py-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            พร้อมเริ่มต้นแล้วใช่ไหม?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            ติดต่อเราวันนี้เพื่อขอใบเสนอราคาฟรี และปรึกษาเกี่ยวกับโปรเจกต์ของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium flex items-center justify-center gap-2">
              <FaWhatsapp />
              Chat ใน WhatsApp
            </button>
            <button className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors duration-200 font-medium">
              ขอใบเสนอราคา
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 