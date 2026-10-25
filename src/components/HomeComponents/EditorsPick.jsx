import React from 'react';

const EditorsPick = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-12 font-sans">
      {/* Başlık Alanı */}
      <div className="text-center mb-8 md:mb-10 px-2">
        <h2 className="text-xl md:text-2xl font-bold tracking-wider text-slate-900 uppercase">
          EDITOR'S PICK
        </h2>
        <p className="text-xs md:text-sm text-slate-500 mt-2 font-medium max-w-xs mx-auto md:max-w-none">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Grid Galeri Alanı */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* MEN - Mobilde daha uzun (450px), Masaüstünde 500px */}
        <div className="relative h-[450px] md:h-[500px] md:col-span-2 group overflow-hidden bg-slate-100">
          <img
            src="https://unsplash.com"
            alt="Men"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
            <button className="bg-white text-slate-900 font-bold text-xs md:text-sm tracking-widest px-6 md:px-8 py-2.5 md:py-3 uppercase shadow-md hover:bg-slate-900 hover:text-white transition-colors duration-300">
              MEN
            </button>
          </div>
        </div>

        {/* WOMEN - Mobilde daha uzun (450px), Masaüstünde 500px */}
        <div className="relative h-[450px] md:h-[500px] md:col-span-1 group overflow-hidden bg-slate-100">
          <img
            src="https://unsplash.com"
            alt="Women"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
            <button className="bg-white text-slate-900 font-bold text-xs md:text-sm tracking-widest px-5 md:px-6 py-2.5 md:py-3 uppercase shadow-md hover:bg-slate-900 hover:text-white transition-colors duration-300">
              WOMEN
            </button>
          </div>
        </div>

        {/* Sağ Taraf Bloğu (ACCESSORIES & KIDS) */}
        <div className="md:col-span-1 flex flex-col gap-4">
          
          {/* ACCESSORIES - Mobilde daha kısa (250px), Masaüstünde 242px */}
          <div className="relative h-[250px] md:h-[242px] group overflow-hidden bg-slate-100">
            <img
              src="https://unsplash.com"
              alt="Accessories"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <button className="bg-white text-slate-900 font-bold text-[10px] md:text-xs tracking-widest px-4 py-2.5 md:py-3 uppercase shadow-md hover:bg-slate-900 hover:text-white transition-colors duration-300">
                ACCESSORIES
              </button>
            </div>
          </div>

          {/* KIDS - Mobilde daha kısa (250px), Masaüstünde 242px */}
          <div className="relative h-[250px] md:h-[242px] group overflow-hidden bg-slate-100">
            <img
              src="https://unsplash.com"
              alt="Kids"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <button className="bg-white text-slate-900 font-bold text-xs md:text-sm tracking-widest px-5 md:px-6 py-2.5 md:py-3 uppercase shadow-md hover:bg-slate-900 hover:text-white transition-colors duration-300">
                KIDS
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EditorsPick;