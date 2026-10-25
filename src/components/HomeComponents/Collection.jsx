import React from 'react';

const Collection = () => {
  return (
    <section className="max-w-7xl mx-auto pt-6 sm:pt-0 font-sans">
      {/* Mobilde ters çevirme (flex-col-reverse) uygulayarak yazıları üste, görseli alta aldık */}
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Görsel Alanı (Mobilde Altta, Masaüstünde Solda) */}
        <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden object-cover bg-slate-50 mt-4 sm:mt-0">
          <img
            src="https://www.libisclothing.com/media/mageplaza/blog/post/s/w/swastiklibis_2__3.png"
            alt="Summer Collection"
            className="w-full h-full object-none object-contain object-top"
          />
        </div>

        {/* İçerik Alanı (Mobilde Üstte, Masaüstünde Sağda) */}
        {/* `flex-col-reverse` nedeniyle mobilde ilk bu alan okunur ve en üstte görünür */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left w-full">
          
          {/* Üst Küçük Başlık */}
          <span className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-5">
            SUMMER 2026
          </span>
          
          {/* Ana Başlık */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-md">
            Part of the Neural Universe
          </h2>
          
          {/* Açıklama Metni */}
          <p className="text-base text-slate-500 font-medium mt-6 leading-relaxed max-w-sm sm:max-w-md">
            We know how large objects will act, but things on a small scale.
          </p>
          
          {/* Yeni Butonlar Grubu (Görseldeki gibi alt alta ve kompakt yapıda) */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 w-full max-w-xs sm:max-w-none md:justify-start">
            
            {/* BUY NOW Butonu (Canlı Mavi) */}
            <button className="w-full md:w-auto bg-[#23A6F0] hover:bg-sky-600 text-white font-bold text-xs tracking-wider px-10 py-3.5 rounded-md transition-colors duration-300 uppercase shadow-sm">
              BUY NOW
            </button>
            
            {/* Learn More Butonu (Mavi Çerçeveli) */}
            <button className="w-full md:w-auto border border-[#23A6F0] text-[#23A6F0] hover:bg-sky-50 font-bold text-xs tracking-wider px-10 py-3.5 rounded-md transition-colors duration-300">
              Learn More
            </button>
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default Collection;