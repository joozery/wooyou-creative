import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    // พยายามเล่นเมื่อ DOM พร้อม
    const tryPlay = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.warn("⚠️ Autoplay ถูกบล็อก: ต้องให้ user คลิกก่อน", error);
            // fallback: รอคลิกครั้งแรก
            const resumeOnClick = () => {
              audio.play().then(() => setIsPlaying(true));
              document.removeEventListener("click", resumeOnClick);
            };
            document.addEventListener("click", resumeOnClick);
          });
      }
    };

    tryPlay();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-prompt py-3">
      <div className="max-w-[1400px] mx-auto px-4 py-3 rounded-full shadow-xl text-white flex items-center justify-between relative border border-white/10 transition-all duration-300 ease-in-out overflow-hidden bg-black/20 backdrop-blur-md">
        
        {/* Glow border */}
        <div className="absolute inset-0 rounded-full border border-blue-400/20 group-hover:border-blue-300 opacity-10 transition-all duration-500 pointer-events-none"></div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto transition-transform duration-500 hover:rotate-6" />
          <span className="text-sm font-light tracking-wide">Creative</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium uppercase absolute left-1/2 -translate-x-1/2">
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUTS", path: "/about" },
            { name: "SERVICE", path: "/service" },
            { name: "OUR CUSTOMER", path: "/customer" },
            { name: "CONTACT", path: "/contact" }
          ].map((item, idx) => (
            item.path.startsWith('/') ? (
              <Link key={idx} to={item.path} className="relative transition-all duration-300 hover:text-blue-400">
                <span>{item.name}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            ) : (
              <a key={idx} href={item.path} className="relative transition-all duration-300 hover:text-blue-400">
                <span>{item.name}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </a>
            )
          ))}
        </div>

        {/* Clickable Wave Bars */}
        <div
          onClick={toggleAudio}
          className="hidden md:flex items-end gap-[3px] h-6 w-8 ml-4 cursor-pointer group"
          title={isPlaying ? "Pause music" : "Play music"}
        >
          <span className={`w-[3px] bg-white rounded-sm transition-all duration-300 group-hover:bg-blue-400 ${isPlaying ? "animate-wave1" : "h-[30%]"}`}></span>
          <span className={`w-[3px] bg-white rounded-sm transition-all duration-300 group-hover:bg-blue-400 ${isPlaying ? "animate-wave2" : "h-[60%]"}`}></span>
          <span className={`w-[3px] bg-white rounded-sm transition-all duration-300 group-hover:bg-blue-400 ${isPlaying ? "animate-wave3" : "h-[20%]"}`}></span>
          <span className={`w-[3px] bg-white rounded-sm transition-all duration-300 group-hover:bg-blue-400 ${isPlaying ? "animate-wave2" : "h-[60%]"}`}></span>
          <span className={`w-[3px] bg-white rounded-sm transition-all duration-300 group-hover:bg-blue-400 ${isPlaying ? "animate-wave1" : "h-[30%]"}`}></span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur px-6 py-4 space-y-3">
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUTS", path: "/about" },
            { name: "SERVICE", path: "/service" },
            { name: "OUR CUSTOMER", path: "/customer" },
            { name: "CONTACT", path: "/contact" }
          ].map((item, idx) => (
            item.path.startsWith('/') ? (
              <Link key={idx} to={item.path} className="block text-white text-sm font-medium uppercase border-b border-white/10 py-2" onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>
            ) : (
              <a key={idx} href={item.path} className="block text-white text-sm font-medium uppercase border-b border-white/10 py-2" onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            )
          ))}
        </div>
      )}

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
    </nav>
  );
}
