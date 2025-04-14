import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Sparkles,
  Environment,
} from "@react-three/drei";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden font-prompt">
      <Canvas camera={{ position: [0, 0, 8], fov: 65 }}>
        {/* 💡 Lights */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2.5} />
        <Environment preset="night" />

        {/* 🌌 Hologram Sphere (น้ำเงิน) */}
        <mesh rotation={[Math.PI / 6, Math.PI / 4, 0]}>
          <sphereGeometry args={[1.8, 64, 64]} />
          <meshStandardMaterial
            color="#2563eb" // น้ำเงิน
            wireframe
            transparent
            opacity={0.9}
            emissive="#3b82f6" // ฟ้าเรือง
            emissiveIntensity={1}
            metalness={0.9}
          />
        </mesh>

        {/* 🔲 Grid Hologram Ground */}
        <gridHelper args={[20, 40, "#3b82f6", "#3b82f6"]} position={[0, -2.2, 0]} />

        {/* ✨ Galaxy Sparkles */}
        <Sparkles
          count={3000}
          scale={[20, 20, 20]}
          size={1.2}
          speed={1}
          color={"#3b82f6"} // น้ำเงินฟ้า
        />

        {/* 🌠 Deep Stars */}
        <Stars radius={200} depth={100} count={5000} factor={5} fade speed={2} />

        {/* 🎥 Auto Rotate */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>

      {/* 👾 Overlay Text UI */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center pointer-events-none px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-widest leading-snug drop-shadow-[0_0_40px_#3b82f6]">
          <span className="bg-gradient-to-r from-blue-800 to-blue-100 bg-clip-text text-transparent">
            Wooyou
          </span>{" "}
          Galaxy
        </h1>
        <p className="text-lg md:text-xl mt-4 text-blue-100 font-light tracking-widest">
          Creative Tech from the Next Dimension.
        </p>
        <div className="mt-8 pointer-events-auto">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full shadow-2xl hover:brightness-110 transition ring-2 ring-blue-500">
            Enter the Experience
          </button>
        </div>
      </div>
    </section>
  );
}