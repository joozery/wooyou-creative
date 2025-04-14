import React from "react";
import {
  SiJavascript,
  SiPython,
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobeillustrator,
  SiFigma,
  SiCplusplus,
  SiTailwindcss,
  SiReact,
  SiWordpress,
  SiNextdotjs,
} from "react-icons/si";

export default function IntroTechSection() {
  return (
    <section className="bg-gradient-to-br from-[#0a0a0a] via-[#0f172a] to-[#111827] py-20 px-6 text-white font-prompt transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🔧 ICONS */}
        <div className="grid grid-cols-3 gap-6 justify-items-center">
          {[SiCplusplus, SiTailwindcss, SiJavascript, SiAdobephotoshop, SiAdobexd, SiPython, SiFigma, SiAdobeillustrator, SiReact, SiNextdotjs, SiWordpress].map((Icon, idx) => (
            <div
              key={idx}
              className="bg-[#1e293b] p-4 rounded-2xl shadow-xl hover:scale-105 transition text-blue-400"
            >
              <Icon size={32} />
            </div>
          ))}
        </div>

        {/* 📄 TEXT */}
        <div>
          <p className="uppercase text-sm text-blue-400 tracking-wider mb-2">
            Wooyou Studio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            เราออกแบบเทคโนโลยี <br className="hidden md:block" />
            ที่เชื่อมโยงผู้คนกับประสบการณ์ที่ล้ำสมัย
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            ที่ Wooyou เราผสมผสานความคิดสร้างสรรค์ เข้ากับเทคโนโลยี เพื่อสร้างประสบการณ์ดิจิทัลที่โดดเด่น
            ไม่ว่าจะเป็น UX/UI, Web App, หรืองานออกแบบแนว Cyber Sci-Fi ที่ตอบโจทย์ยุคใหม่
          </p>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-300 text-black font-semibold rounded-full shadow-md hover:brightness-110 transition">
            อ่านเพิ่มเติม
          </button>
        </div>
      </div>
    </section>
  );
}