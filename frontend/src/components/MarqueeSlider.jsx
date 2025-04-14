import React from "react";

export default function MarqueeSlider() {
  return (
    <div className="bg-blue-600 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee text-black font-bold text-lg py-2 flex gap-8">
        {Array(20)
          .fill("WOOYOU")
          .map((text, i) => (
            <span key={i}>{text}</span>
          ))}
      </div>
    </div>
  );
}