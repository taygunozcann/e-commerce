import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function TeamCard({ image, name, profession, facebookUrl, instagramUrl, twitterUrl }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-4 transition-transform hover:scale-105">
      {/* Profil Fotoğrafı */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-56 object-cover rounded-none mb-4"
      />
      
      {/* Kullanıcı Bilgileri */}
      <h3 className="font-bold text-slate-950 text-base">{name}</h3>
      <p className="text-slate-500 text-xs font-semibold mt-1">{profession}</p>
      
      {/* Sosyal Medya İkonları */}
      <div className="flex gap-4 mt-3 text-sky-500 text-base">
        <a href={facebookUrl || "#"} className="hover:text-sky-600 transition-colors" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href={instagramUrl || "#"} className="hover:text-sky-600 transition-colors" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href={twitterUrl || "#"} className="hover:text-sky-600 transition-colors" aria-label="Twitter">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default TeamCard;