// src/components/BlogSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";

const blogs = [
  {
    title: "เทคนิคการทำ SEO ให้เว็บไซต์ติดอันดับ",
    excerpt:
      "เรียนรู้การปรับแต่งเว็บไซต์ทั้งภายในและภายนอก เพื่อให้ Google จัดอันดับให้สูงขึ้นได้อย่างมีประสิทธิภาพ",
    date: "10 เม.ย. 2568",
    author: "ทีมงาน Wooyou",
    image: "https://talkatalka.com/wp-content/uploads/2022/06/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-SEO_Cover_Image-1024x536.jpg",
    link: "#",
  },
  {
    title: "UX ที่ดีช่วยเพิ่มยอดขายได้อย่างไร",
    excerpt:
      "เจาะลึกแนวคิดเรื่อง UX/UI ว่ามีผลต่อพฤติกรรมผู้ใช้อย่างไร พร้อมแนวทางการปรับปรุงเว็บไซต์ของคุณ",
    date: "5 มี.ค. 2568",
    author: "ทีมออกแบบ",
    image: "https://goonlinethailand.com/wp-content/uploads/2022/06/1200x600-uxui.jpg",
    link: "#",
  },
  {
    title: "เริ่มต้นกับ Tailwind CSS สำหรับนักพัฒนาเว็บ",
    excerpt:
      "Tailwind CSS คืออะไร? ทำไมถึงเป็นที่นิยม และจะเริ่มต้นใช้งานอย่างไรในโปรเจกต์ของคุณ",
    date: "20 ก.พ. 2568",
    author: "Dev Team",
    image: "https://www.borntodev.com/wp-content/uploads/2023/10/Devinit-blog-css-tailwind-scaled.webp",
    link: "#",
  },
  {
    title: "WordPress หรือ Next.js ดีสำหรับ SEO?",
    excerpt:
      "เปรียบเทียบการใช้ WordPress และ Next.js สำหรับสาย SEO และเว็บไซต์ที่ต้องการความเร็วสูง",
    date: "15 ม.ค. 2568",
    author: "Tech Writer",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQFoCFNuhgfdLw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1732781914575?e=2147483647&v=beta&t=96un7pEkqZqLr__Wmk090yZI5qWuftVML1dsf2k_SXk",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-black py-20 text-white font-prompt">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
            บทความล่าสุดจากเรา
          </h2>
          <p className="text-gray-400 text-lg">
            รวมเรื่องราวและบทความดีๆ เกี่ยวกับเทคโนโลยี การออกแบบ และการทำตลาดออนไลน์
          </p>
        </header>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
            <article className="overflow-hidden rounded-2xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-400/30 bg-[#1e293b]/30 backdrop-blur-md">
              
              {/* 🖼 ภาพ: ชัด ไม่เบลอ */}
              <div className="relative w-full h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 z-10">
                  <FaRegCalendarAlt className="text-blue-300" />
                  {blog.date}
                </div>
              </div>
          
              {/* 📄 เนื้อหาด้านล่าง: เบลอพื้นหลัง */}
              <div className="p-6 backdrop-blur-md bg-[#0f172a]/60">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{blog.title}</h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <FaRegUser className="text-blue-400 mr-2" />
                  {blog.author}
                </div>
                <a
                  href={blog.link}
                  className="text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  อ่านต่อ →
                </a>
              </div>
            </article>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}