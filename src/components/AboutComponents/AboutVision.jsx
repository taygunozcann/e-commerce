import React from 'react';

function AboutVision() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-white">
      {/* Sol ve Orta Sütunları Kapsayan Başlık */}
      <div className="lg:col-span-2 space-y-4">
        <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Problems trying</span>
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-950 max-w-xl leading-snug">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h2>
      </div>
      
      {/* Sağ Sütun Detay Metni */}
      <div>
        <p className="text-slate-500 text-sm leading-relaxed">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
    </section>
  );
}

export default AboutVision;