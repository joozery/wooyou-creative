import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from "@react-three/drei";

// ✅ โหลดโมเดล .glb และปรับขนาดให้ใหญ่ขึ้น
function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={2} position={[0, 0, 0]} />;
}
useGLTF.preload("/model.glb");

// ✅ กล้อง zoom-in เมื่อโหลด
function CameraZoomOnLoad() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 1.5, 2.5); // ✅ กล้องใกล้เข้าแบบสมดุล
    camera.lookAt(0, 1, 0); // ✅ มองไปที่โมเดล (กลาง)
  }, [camera]);

  return null;
}

export default function ModelViewer() {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-800 ">
      <div className="h-[600px] w-full">
        <Canvas
          shadows
          camera={{ position: [5, 3, 8], fov: 45 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          {/* 💡 แสงและเงา */}
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            intensity={1}
            position={[10, 10, 5]}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          {/* 📷 กล้อง zoom เข้าอัตโนมัติ */}
          <CameraZoomOnLoad />

          {/* 🌇 โหลดโมเดล + สิ่งแวดล้อม */}
          <Suspense fallback={null}>
            <Model url="/model.glb" />
            <Environment preset="sunset" />
          </Suspense>

          {/* 🔳 พื้นรองเงา */}
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.3}
            scale={10}
            blur={2}
            far={5}
          />

          {/* 🧪 Debug (ลบออกได้ภายหลัง) */}
          {/* <axesHelper args={[5]} /> */}

          {/* 🕹️ กล้อง: หมุนได้, ขยับได้, ซูมได้ */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            screenSpacePanning={true}
          />
        </Canvas>
      </div>
    </section>
  );
}
