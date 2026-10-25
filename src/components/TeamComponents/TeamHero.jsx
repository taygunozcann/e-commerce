import React from 'react';

function TeamHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-center">
      {/* Başlık Grubu */}
      <div className="space-y-3 mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">What We Do</span>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">Innovation tailored for you</h1>
        <p className="text-sm font-semibold text-slate-600">
          Home <span className="text-slate-400 mx-1">&gt;</span> <span className="text-slate-400">Team</span>
        </p>
      </div>

      {/* Görsel Galeri Grid Yapısı */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* Sol Taraf: Büyük Dikey Görsel */}
        <div className="md:col-span-2 h-[450px]">
          <img 
            src="https://unsplash.com" 
            alt="Featured Model" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sağ Taraf: 4'lü Küçük Görsel Matrisi */}
        <div className="md:col-span-2 grid grid-cols-2 gap-3 h-[450px]">
          <img 
            src="https://unsplash.com" 
            alt="Gallery 1" 
            className="w-full h-[218px] object-cover"
          />
          <img 
            src="https://unsplash.com" 
            alt="Gallery 2" 
            className="w-full h-[218px] object-cover"
          />
          <img 
            src="https://unsplash.com" 
            alt="Gallery 3" 
            className="w-full h-[218px] object-cover"
          />
          <img 
            src="https://unsplash.com" 
            alt="Gallery 4" 
            className="w-full h-[218px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default TeamHero;