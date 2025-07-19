import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCookie, FaLock, FaUserShield, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <FaShieldAlt />,
      title: "ข้อมูลที่เราเก็บรวบรวม",
      content: [
        "• ข้อมูลส่วนบุคคลที่คุณให้โดยตรง เช่น ชื่อ อีเมล หมายเลขโทรศัพท์",
        "• ข้อมูลการใช้งานเว็บไซต์ เช่น หน้าที่เข้าชม เวลาที่ใช้งาน",
        "• ข้อมูลเทคนิค เช่น IP address, ประเภทเบราว์เซอร์, ระบบปฏิบัติการ",
        "• ข้อมูลคุกกี้และเทคโนโลยีที่คล้ายกัน"
      ]
    },
    {
      icon: <FaCookie />,
      title: "การใช้คุกกี้",
      content: [
        "• คุกกี้จำเป็น: สำหรับการทำงานพื้นฐานของเว็บไซต์",
        "• คุกกี้วิเคราะห์: Google Analytics เพื่อปรับปรุงประสิทธิภาพ",
        "• คุกกี้การตลาด: เพื่อแสดงโฆษณาที่เกี่ยวข้อง",
        "• คุกกี้ปรับแต่ง: เพื่อจดจำการตั้งค่าของผู้ใช้",
        "คุณสามารถจัดการคุกกี้ได้ผ่านการตั้งค่าเบราว์เซอร์ของคุณ"
      ]
    },
    {
      icon: <FaLock />,
      title: "วัตถุประสงค์การใช้ข้อมูล",
      content: [
        "• ให้บริการและตอบสนองคำร้องขอของคุณ",
        "• ปรับปรุงและพัฒนาเว็บไซต์และบริการ",
        "• ส่งข้อมูลข่าวสารและการตลาด (หากได้รับความยินยอม)",
        "• ป้องกันการใช้งานที่ผิดกฎหมายและการฉ้อโกง",
        "• ปฏิบัติตามข้อกำหนดทางกฎหมาย"
      ]
    },
    {
      icon: <FaUserShield />,
      title: "การแบ่งปันข้อมูล",
      content: [
        "เราไม่ขาย เช่า หรือแลกเปลี่ยนข้อมูลส่วนบุคคลของคุณกับบุคคลที่สาม",
        "เราอาจแบ่งปันข้อมูลในกรณีดังต่อไปนี้:",
        "• กับผู้ให้บริการที่เชื่อถือได้เพื่อช่วยในการดำเนินธุรกิจ",
        "• เมื่อจำเป็นตามกฎหมายหรือคำสั่งของหน่วยงานราชการ",
        "• เพื่อป้องกันสิทธิ์ ทรัพย์สิน หรือความปลอดภัยของเราและผู้อื่น"
      ]
    }
  ];

  const userRights = [
    "สิทธิในการเข้าถึงข้อมูลส่วนบุคคล",
    "สิทธิในการแก้ไขข้อมูลส่วนบุคคล",
    "สิทธิในการลบข้อมูลส่วนบุคคล",
    "สิทธิในการระงับการประมวลผล",
    "สิทธิในการโอนย้ายข้อมูล",
    "สิทธิในการถอนความยินยอม"
  ];

  return (
    <div className="min-h-screen bg-black text-white font-prompt">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <FaArrowLeft className="text-sm" />
              กลับสู่หน้าหลัก
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6">
              <FaShieldAlt className="text-3xl text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              นโยบายความเป็นส่วนตัว
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              WooYou Creative
            </p>
            <p className="text-sm text-gray-400">
              อัปเดตล่าสุด: {new Date().toLocaleDateString('th-TH', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
                         <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                เกี่ยวกับนโยบายนี้
              </h2>
              <p className="text-gray-300 leading-relaxed">
                WooYou Creative ("เรา", "เราของเรา") ให้ความสำคัญกับความเป็นส่วนตัวของคุณ 
                นโยบายความเป็นส่วนตัวนี้อธิบายวิธีที่เราเก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของคุณ
                เมื่อคุณใช้เว็บไซต์ของเรา นโยบายนี้ยังครอบคลุมสิทธิ์ต่างๆ ของคุณเกี่ยวกับข้อมูลส่วนบุคคล
                และวิธีที่คุณสามารถติดต่อเราหากมีคำถามเกี่ยวกับความเป็นส่วนตัว
              </p>
            </div>
          </motion.div>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                                 className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-300 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* User Rights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">
              สิทธิของเจ้าของข้อมูลส่วนบุคคล
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {userRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-black/30 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">{right}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security & Contact */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
                <FaLock />
                ความปลอดภัยของข้อมูล
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                เราใช้มาตรการรักษาความปลอดภัยทางเทคนิคและองค์กรที่เหมาะสม
                เพื่อปกป้องข้อมูลส่วนบุคคลของคุณจากการเข้าถึง การใช้ 
                การเปิดเผย การดัดแปลง หรือการทำลายโดยไม่ได้รับอนุญาต
              </p>
              <p className="text-gray-400 text-sm">
                อย่างไรก็ตาม ไม่มีวิธีการส่งผ่านข้อมูลทางอินเทอร์เน็ต
                หรือวิธีการจัดเก็บข้อมูลแบบอิเล็กทรอนิกส์ที่ปลอดภัย 100%
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                ติดต่อเรา
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ 
                หรือต้องการใช้สิทธิ์ของคุณ กรุณาติดต่อเราผ่าน:
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">
                  <span className="text-blue-400">อีเมล:</span> privacy@wooyoucreative.com
                </p>
                <p className="text-gray-400">
                  <span className="text-blue-400">โทรศัพท์:</span> 02-XXX-XXXX
                </p>
                <p className="text-gray-400">
                  <span className="text-blue-400">ที่อยู่:</span> กรุงเทพมหานคร, ประเทศไทย
                </p>
              </div>
            </motion.div>
          </div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 pt-8 border-t border-gray-700 text-center"
          >
            <p className="text-gray-400 text-sm">
              นโยบายความเป็นส่วนตัวนี้อาจมีการอัปเดตเป็นครั้งคราว 
              การเปลี่ยนแปลงที่สำคัญจะแจ้งให้ทราบล่วงหน้า
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 