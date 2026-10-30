import { Link } from 'react-router-dom';
import { useState } from 'react';

// Slayt içeriklerimizi dinamik olarak tanımlıyoruz
const SLIDES = [
  {
    id: 1,
    image: 'https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    title: 'Yeni Sezon Koleksiyonu',
    description: 'En trend ürünlerde %30 indirim fırsatını kaçırmayın.',
    buttonText: 'Alışverişe Başla',
    buttonLink: '/shop'
  },
  {
    id: 2,
    image: 'https://unsplash.com',
    title: 'Doğayla İç İçe Kamp Alanları',
    description: 'Hafta sonu kaçamağı için en popüler rotaları keşfedin.',
    buttonText: 'Rotaları İncele',
    buttonLink: '/shop'
  },
  {
    id: 3,
    image: 'https://unsplash.com',
    title: 'Geleceğin Teknolojileri',
    description: 'Akıllı ev sistemleri ve yapay zeka entegrasyonları şimdi stokta.',
    buttonText: 'Detaylı Bilgi',
    buttonLink: '/shop'
  }
];

export default function ContentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="relative w-full  mx-auto h-[75vh] overflow-hidden  shadow-lg group">
      
      {/* Slayt Taşıyıcı Alan (Flexbox & Transform Geçişi) */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            {/* Arka Plan Görseli */}
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            
            {/* Karartma Katmanı (Yazıların okunabilmesi için gölgelendirme) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Buton ve Yazı İçerik Alanı */}
            <div className="absolute bottom-12 left-10 right-10 text-white z-10 max-w-lg">
              <h2 className="text-3xl font-bold mb-3 tracking-wide drop-shadow-md">
                {slide.title}
              </h2>
              <p className="text-gray-200 text-sm md:text-base mb-6 drop-shadow-sm">
                {slide.description}
              </p>
              <Link
                to={slide.buttonLink}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 shadow-md"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sol Ok Butonu */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        ❮
      </button>

      {/* Sağ Ok Butonu */}
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        ❯
      </button>

      {/* Alt Sayfalama Noktaları */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}