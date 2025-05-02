import React from "react";
import { FaCogs, FaDatabase, FaProjectDiagram, FaCloud } from "react-icons/fa";

export default function ERPServiceSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden font-prompt">
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://a.storyblok.com/f/271652/x/1708303f5c/spectre_desktop_homepage-lg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10 backdrop-blur-sm" />

      {/* 📄 Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-6 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left: Text Content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s", animationDuration: "1s" }}>
            <p className="uppercase text-sm tracking-widest text-blue-400 mb-3 animate-pulse">
              ERP SERVICE
            </p>
            <h2 className="text-5xl font-extrabold mb-4 leading-tight drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              ระบบ ERP <span className="text-purple-400">ครบวงจร</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              จัดการธุรกิจอย่างมืออาชีพ ทั้งงานขาย สต๊อก พนักงาน บัญชี และอื่น ๆ
              พร้อมเชื่อมต่อ Cloud และปรับแต่งได้ตามธุรกิจของคุณ
            </p>

            {/* Read More Button */}
            <a
              href="/erp-details"
              className="inline-block px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-full text-sm shadow-md hover:shadow-purple-500/30"
            >
              อ่านรายละเอียดเพิ่มเติม
            </a>
          </div>

          {/* Right: Feature Icon Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.4s", animationDuration: "1.2s" }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:shadow-md hover:shadow-purple-400/20"
              >
                <div className="bg-purple-500 p-3 rounded-full mb-4 animate-bounce-slow">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Custom Animations (CSS, add to global or index.css)
const features = [
  {
    icon: FaCogs,
    title: "Custom ERP",
    description: "พัฒนาระบบเฉพาะสำหรับธุรกิจคุณ ปรับแต่งได้ทุกฟังก์ชัน",
  },
  {
    icon: FaDatabase,
    title: "Data Management",
    description: "จัดเก็บและบริหารข้อมูลอย่างเป็นระบบ พร้อมรองรับข้อมูลขนาดใหญ่",
  },
  {
    icon: FaProjectDiagram,
    title: "Workflow Automation",
    description: "ทำงานแบบอัตโนมัติ ลดต้นทุน เพิ่มประสิทธิภาพในการทำงาน",
  },
  {
    icon: FaCloud,
    title: "Cloud Integration",
    description: "เชื่อมต่อ Cloud Service รองรับการทำงานได้ทุกที่ ทุกเวลา",
  },
];
