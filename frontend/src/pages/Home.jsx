import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection"; // ✅ เพิ่มส่วนนี้
import MarqueeSlider from "../components/MarqueeSlider";
import IntroTechSection from "../components/IntroTechSection";
import BlogSection from "../components/BlogSection";
import RecentWorkSection from "../components/RecentWorkSection";
import GameSection from "../components/GameSection";  // ✅ เพิ่มส่วนนี้

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSlider />
      <ServiceSection /> {/* ✅ เรียกใช้งานตรงนี้ */}
      <IntroTechSection /> {/* ✅ แนะนำบริษัท + ไอคอน */}
      <RecentWorkSection />
      <BlogSection /> {/* แสดง section blog */}
      <GameSection /> {/* ✅ เรียกใช้งานตรงนี้ */}
    </>
  );
}