import React from 'react';
// Marka logoları için popüler kütüphaneden ikonları çağırıyoruz
import { FaHooli, FaLyft, FaStripe, FaAws, FaRedditAlien } from 'react-icons/fa';
import { SiScania } from 'react-icons/si';

function AboutClients() {
  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-3 mb-12">
        <h2 className="text-3xl font-bold text-slate-950">Big Companies Are Here</h2>
        <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Logolar Grid Yapısı */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center items-center text-5xl text-slate-400">
        <div className="hover:text-slate-600 transition-colors"><FaHooli /></div>
        <div className="hover:text-slate-600 transition-colors"><FaLyft /></div>
        <div className="hover:text-slate-600 transition-colors"><SiScania /></div>
        <div className="hover:text-slate-600 transition-colors"><FaStripe /></div>
        <div className="hover:text-slate-600 transition-colors"><FaAws /></div>
        <div className="hover:text-slate-600 transition-colors"><FaRedditAlien /></div>
      </div>
    </section>
  );
}

export default AboutClients;