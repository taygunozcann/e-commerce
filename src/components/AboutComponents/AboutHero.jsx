import React from 'react';

function AboutHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white">
      {/* Sol İçerik Alanı */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-900">About Company</span>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
          ABOUT US
        </h1>
        <p className="text-slate-500 max-w-md mx-auto lg:mx-0 text-sm leading-relaxed">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3 rounded-md transition-colors text-sm shadow-sm">
          Get Quote Now
        </button>
      </div>

      {/* Sağ Görsel Alanı */}
      <div className="w-full lg:w-1/2 flex justify-center relative">
        {/* Arkadaki dekoratif pembe daire */}
        <div className="absolute top-0 right-10 w-72 h-72 bg-pink-100 rounded-full -z-10 opacity-70"></div>
        <img 
          src="https://unsplash.com" 
          alt="Shopping Woman" 
          className="w-full max-w-md h-[450px] object-cover rounded-md"
        />
      </div>
    </section>
  );
}

export default AboutHero;