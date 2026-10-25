import React from 'react';
import { FaTwitter, FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

function TeamCTA() {
  return (
    <section className="py-20 px-6 text-center bg-white flex flex-col items-center justify-center space-y-6">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
        Start your 14 days free trial
      </h2>
      
      <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
      </p>
      
      <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3 rounded-md transition-colors shadow-md text-sm">
        Try it free now
      </button>

      {/* Alt Kurumsal Sosyal Medya İkonları */}
      <div className="flex gap-6 text-2xl pt-4">
        <a href="#" className="text-sky-400 hover:text-sky-500 transition-colors" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="#" className="text-blue-900 hover:text-blue-950 transition-colors" aria-label="Facebook">
          <FaFacebookSquare />
        </a>
        <a href="#" className="text-slate-950 hover:text-slate-800 transition-colors" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" className="text-blue-700 hover:text-blue-800 transition-colors" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default TeamCTA;