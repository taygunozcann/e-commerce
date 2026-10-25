import React from 'react';

function AboutBanner() {
  return (
    <section className="w-full flex flex-col md:flex-row mt-12 bg-white">
      {/* Sol Mavi İçerik Alanı */}
      <div className="w-full md:w-3/5 bg-blue-600 text-white p-12 lg:p-24 flex flex-col justify-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-wider opacity-90">WORK WITH US</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">Now Let's grow Yours</h2>
        <p className="text-sm opacity-80 max-w-sm leading-relaxed">
          The Muppets studio stock options deep planet organic waste batteries during the first quarter of the 2024.
        </p>
        <button className="w-fit border border-white hover:bg-white hover:text-blue-600 text-white font-bold px-6 py-2 rounded-md transition-all text-sm">
          Button
        </button>
      </div>
      
      {/* Sağ Görsel Alanı */}
      <div className="w-full md:w-2/5 h-64 md:h-auto min-h-[350px]">
        <img 
          src="https://unsplash.com" 
          alt="Work with us concept" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default AboutBanner;