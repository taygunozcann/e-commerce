import React from 'react';
// React-Icons kütüphanesinden Font Awesome ikonlarını çağırıyoruz
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function ContactHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Sol İçerik Alanı */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Contact Us</span>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
          Get in touch <br /> today!
        </h1>
        <p className="text-slate-500 max-w-md mx-auto lg:mx-0">
          We know how large objects will act, but things on a small scale.
        </p>
        
        {/* İletişim Bilgileri */}
        <div className="space-y-2 pt-4 font-semibold text-slate-800">
          <p>Phone : +451 215 215</p>
          <p>Fax : +451 215 215</p>
        </div>

        {/* Güncellenen Sosyal Medya İkonları */}
        <div className="flex justify-center lg:justify-start gap-6 text-xl text-slate-700 pt-2">
          <a href="#" className="hover:text-[#1DA1F2] transition-colors" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-[#1877F2] transition-colors" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[#E1306C] transition-colors" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#0077B5] transition-colors" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Sağ Görsel Alanı */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96 bg-pink-100 rounded-full flex items-center justify-center overflow-hidden">
          <div className="text-center p-6 text-slate-400">
            [Alışveriş Yapan Aile Görseli]
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;