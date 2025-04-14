import React from "react";
import { FaRocket, FaTools, FaLightbulb, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <FaRocket size={32} />,
    title: "Fast Deployment",
    description: "เราสามารถพัฒนาและส่งมอบระบบให้คุณได้อย่างรวดเร็ว ทันใจ",
  },
  {
    icon: <FaTools size={32} />,
    title: "Custom Solutions",
    description: "ออกแบบระบบให้เหมาะกับความต้องการเฉพาะทางของธุรกิจคุณ",
  },
  {
    icon: <FaLightbulb size={32} />,
    title: "Creative Ideas",
    description: "เติมไอเดียสร้างสรรค์ให้กับงานของคุณด้วยทีมที่มีประสบการณ์",
  },
  {
    icon: <FaUsers size={32} />,
    title: "Professional Support",
    description: "ดูแลหลังการขายด้วยทีมงานมืออาชีพ พร้อมให้คำปรึกษาตลอดเวลา",
  },
];

export default function ServiceSection() {
  return (
    <section className="relative bg-black py-20 text-white font-prompt overflow-hidden">
      {/* 💫 Background Overlay Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black" />

      {/* ✨ Particles or Decorative Blur Lights */}
      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] top-10 left-[-5%]"></div>
      <div className="absolute w-80 h-80 bg-cyan-400/20 rounded-full blur-[100px] bottom-0 right-[-10%]"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <span className="text-sm uppercase text-blue-400 tracking-wider border border-blue-500 px-3 py-1 rounded-full inline-block mb-4">
          Our Services
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Complete Solutions for Your <span className="text-blue-400">Business</span>
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-12">
          เรามอบโซลูชันที่ครบวงจรทั้งด้านเทคโนโลยีและดีไซน์สำหรับองค์กรที่ต้องการความล้ำสมัย
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-blue-500/10 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-blue-500/30 transition hover:scale-105 duration-300 backdrop-blur-md"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-4 rounded-full mb-4 shadow-md text-black">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-300">{service.title}</h3>
              <p className="text-sm text-gray-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}