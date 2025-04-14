// src/components/GameSection.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const getRandomPosition = () => ({
  top: `${Math.random() * 80 + 10}%`,
  left: `${Math.random() * 80 + 10}%`,
});

export default function GameSection() {
  const [score, setScore] = useState(0);
  const [orbPos, setOrbPos] = useState(getRandomPosition());
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbPos(getRandomPosition());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setScore(score + 1);
    setOrbPos(getRandomPosition());
    setClicking(true);
    setTimeout(() => setClicking(false), 200);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-black to-[#1e293b] py-20 text-white font-prompt overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-400">
          เล่นเกม Galactic Orb ✨
        </h2>
        <p className="text-gray-400 mt-2">เก็บลูกแก้วจากจักรวาลเพื่อเพิ่มคะแนนของคุณ</p>
        <p className="mt-4 text-xl text-white font-semibold">
          คะแนน: <span className="text-blue-300">{score}</span>
        </p>
      </div>

      {/* พื้นหลังหมอกเบา ๆ */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-black pointer-events-none" />

      {/* ลูกแก้ว */}
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 shadow-2xl cursor-pointer absolute"
        style={orbPos}
        whileTap={{ scale: 1.2 }}
        animate={clicking ? { scale: 1.2 } : { scale: 1 }}
        onClick={handleClick}
      />

      {/* เส้นกริด */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f615_1px,_transparent_1px)] [background-size:32px_32px] pointer-events-none" />
    </section>
  );
}