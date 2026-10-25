import React from 'react';
import { FaPlay } from 'react-icons/fa';

function AboutVideo() {
  return (
    <section className="bg-white max-w-5xl mx-auto px-6 py-12">
      <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-lg group">
        <img 
          src="https://unsplash.com" 
          alt="Mountain Lake Video Placeholder" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Ortadaki Yuvarlak Play Butonu */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <button 
            className="w-16 h-16 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center text-lg shadow-xl transition-transform hover:scale-110" 
            aria-label="Play Video"
          >
            <FaPlay className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutVideo;