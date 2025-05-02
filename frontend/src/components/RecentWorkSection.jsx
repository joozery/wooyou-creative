import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: "Vista Thailand",
    image:
      "https://res.cloudinary.com/dxgfnmjup/image/upload/v1746187567/%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_papqml.jpg",
    link: "https://vistatyhailand01.netlify.app/",
  },
  {
    title: "Gography ทริปเดินทางท่องเที่ยวต่างประเทศ ",
    image: "https://res.cloudinary.com/dxgfnmjup/image/upload/v1746188526/gogo_jobdqx.jpg",
    link: "https://gography.website/",
  },
  {
    title: "Devdechawatd",
    image: "https://res.cloudinary.com/dxgfnmjup/image/upload/v1746189194/dev_huwhox.jpg",
    link: "https://www.devdechawatd.com/",
  },
  {
    title: "บริษัท รีสเปคท์ เอ็นจิเนียริ่ง จํากัด",
    image: "https://res.cloudinary.com/dxgfnmjup/image/upload/v1746189401/res_gysrsn.jpg",
    link: "https://respectengineering.co.th/",
  },
  {
    title: "gainingtravels",
    image: "https://res.cloudinary.com/dxgfnmjup/image/upload/v1746189872/gianung_t8jdzw.jpg",
    link: "https://gainingtravels.com/",
  },
  {
    title: "เช็คช่างก่อนโอน",
    image: "https://res.cloudinary.com/dxgfnmjup/image/upload/v1746190151/%E0%B9%80%E0%B8%8A%E0%B9%87%E0%B8%84%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%87_cxbyyr.jpg",
    link: "https://checkchanggong.netlify.app/",
  },
];

export default function RecentWorkSection() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#0f172a] via-[#112a45] to-black py-20 px-6 text-white font-prompt relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">ผลงานที่ผ่านมา</h2>
          <p className="text-blue-200 max-w-xl mx-auto text-base">
            รวมผลงานออกแบบ UI/UX สำหรับเว็บไซต์ แอปพลิเคชัน และแพลตฟอร์มดิจิทัล
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-blue-500/30 border border-white/10 z-10 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition"
          >
            <FaChevronLeft />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-12 py-2"
          >
            {projects.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-shrink-0 w-72 h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-md hover:shadow-blue-500/20 hover:border-blue-400 group transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <div>
                    <p className="text-xs text-blue-300 uppercase mb-1">Website</p>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-blue-500/30 border border-white/10 z-10 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 text-sm shadow hover:shadow-blue-500/30"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
            </svg>
            ดูผลงานทั้งหมด
          </a>
        </div>
      </div>
    </section>
  );
}
