import React from "react";

const projects = [
  {
    title: "Web3 Agency Website",
    image: "https://via.placeholder.com/500x300?text=Web3+Agency",
  },
  {
    title: "Corporate Landing Page",
    image: "https://via.placeholder.com/500x300?text=Corporate+Landing",
  },
  {
    title: "Podcast UI Design",
    image: "https://via.placeholder.com/500x300?text=Podcast+UI",
  },
  {
    title: "Mobile Banking App",
    image: "https://via.placeholder.com/500x300?text=Mobile+App",
  },
  {
    title: "Metaverse Social UI",
    image: "https://via.placeholder.com/500x300?text=Metaverse+UI",
  },
  {
    title: "NFT App Design",
    image: "https://via.placeholder.com/500x300?text=NFT+UI+Part+2",
  },
];

export default function RecentWorkSection() {
  return (
    <section className="bg-black py-20 px-6 text-white font-prompt">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="uppercase text-sm tracking-wider text-blue-400 mb-2">
            Recent Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            ชมผลงาน <span className="text-purple-400">ออกแบบล่าสุด</span> ของเรา
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-lg">
            UI / UX Design ที่ผสมผสานระหว่างเทคโนโลยี ความคิดสร้างสรรค์ และความล้ำสมัย
          </p>
        </div>

        {/* Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-[#1e293b]/30 backdrop-blur-md hover:scale-[1.03] transition-all border border-white/10 hover:border-purple-400"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}