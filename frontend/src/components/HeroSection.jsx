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
      {/* ⭐️ Canvas ที่ไม่ขวาง scroll/touch */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 65 }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2.5} />
        <Environment preset="night" />

        {/* 🌐 Hologram Sphere */}
        <mesh rotation={[Math.PI / 6, Math.PI / 4, 0]}>
          <sphereGeometry args={[1.8, 64, 64]} />
          <meshStandardMaterial
            color="#2563eb"
            wireframe
            transparent
            opacity={0.9}
            emissive="#3b82f6"
            emissiveIntensity={1}
            metalness={0.9}
          />
        </mesh>

        {/* 🟦 Grid Plane */}
        <gridHelper args={[20, 40, "#3b82f6", "#3b82f6"]} position={[0, -2.2, 0]} />

        {/* ✨ Effects */}
        <Sparkles
          count={3000}
          scale={[20, 20, 20]}
          size={1.2}
          speed={1}
          color={"#3b82f6"}
        />
        <Stars radius={200} depth={100} count={5000} factor={5} fade speed={2} />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>

      {/* 👾 Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-widest leading-snug drop-shadow-[0_0_40px_#3b82f6]">
            <span className="bg-gradient-to-r from-blue-800 to-blue-100 bg-clip-text text-transparent">
              Wooyou
            </span>{" "}
            Galaxy
          </h1>
          <p className="text-md sm:text-lg md:text-xl mt-4 text-blue-100 font-light tracking-widest">
            Creative Tech from the Next Dimension.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full shadow-2xl hover:brightness-110 transition ring-2 ring-blue-500">
              Enter the Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}