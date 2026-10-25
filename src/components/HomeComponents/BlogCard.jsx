import React from 'react';

const BlogCard = ({ image, tag, title, description, date, comments }) => {
  return (
    <div className="flex flex-col bg-white border border-slate-100 shadow-sm overflow-hidden group">
      
      {/* Görsel Alanı ve "NEW" Etiketi */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <span className="absolute top-4 left-4 z-10 bg-[#E74C3C] text-white font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-sm shadow-sm">
          NEW
        </span>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
        />
      </div>

      {/* İçerik Alanı */}
      <div className="flex flex-col p-6 flex-1">
        
        {/* Kategori / Etiket Linkleri */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="text-[#23A6F0] cursor-pointer hover:underline">Google</span>
          <span className="text-slate-400">Trending</span>
          <span className="text-slate-400">New</span>
        </div>

        {/* Başlık */}
        <h4 className="text-xl font-bold text-slate-900 tracking-tight mt-3 leading-snug cursor-pointer hover:text-[#23A6F0] transition-colors">
          {title}
        </h4>

        {/* Açıklama Metni */}
        <p className="text-sm text-slate-500 font-normal mt-3 leading-relaxed flex-1">
          {description}
        </p>

        {/* Alt Bilgiler: Tarih ve Yorum Sayısı */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mt-6 text-xs font-medium text-slate-500">
          {/* Tarih (Saat İkonu Temsili) */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#23A6F0]">🕒</span> 
            <span>{date}</span>
          </div>
          {/* Yorum Sayısı (Grafik/Yorum İkonu Temsili) */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#23D075]">📊</span> 
            <span>{comments} comments</span>
          </div>
        </div>

        {/* Learn More Butonu */}
        <div className="pt-4 flex items-center gap-2 text-sm font-bold text-slate-500 cursor-pointer hover:text-[#23A6F0] transition-colors group/link">
          <span>Learn More</span>
          <span className="text-[#23A6F0] transform transition-transform group-hover/link:translate-x-1">➔</span>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;