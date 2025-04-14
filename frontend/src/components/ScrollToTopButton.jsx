// src/components/ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-[9999] p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg hover:scale-110 transition-all"
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </button>
    )
  );
}