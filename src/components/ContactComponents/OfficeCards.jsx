import React from 'react';
// Feather Icons paketinden iletişim ikonlarını çağırıyoruz
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

function OfficeCards() {
  const cardData = [
    {
      id: 1,
      icon: <FiPhone />,
      emails: ['georgia.young@example.com', 'georgia.young@ple.com'],
      title: 'Get Support',
      isDark: false
    },
    {
      id: 2,
      icon: <FiMapPin />,
      emails: ['georgia.young@example.com', 'georgia.young@ple.com'],
      title: 'Get Support',
      isDark: true // Ortadaki koyu renkli vurgulu kart
    },
    {
      id: 3,
      icon: <FiMail />,
      emails: ['georgia.young@example.com', 'georgia.young@ple.com'],
      title: 'Get Support',
      isDark: false
    }
  ];

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-4 mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Visit Our Office</span>
        <h2 className="text-3xl font-bold text-slate-900 max-w-md mx-auto">
          We help small businesses with big ideas
        </h2>
      </div>

      {/* Grid Yapısı */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-0">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`flex flex-col items-center text-center p-10 rounded-lg md:rounded-none transition-transform hover:scale-105 ${
              card.isDark 
                ? 'bg-slate-900 text-white py-16 shadow-xl relative z-10 md:rounded-lg' 
                : 'bg-white text-slate-800'
            }`}
          >
            {/* Güncellenen Büyük İkon Alanı */}
            <div className="mb-5 text-5xl text-sky-400">
              {card.icon}
            </div>

            {/* E-postalar */}
            <div className="space-y-1 text-sm font-medium">
              {card.emails.map((email, idx) => (
                <p key={idx} className={card.isDark ? 'text-slate-300' : 'text-slate-600'}>
                  {email}
                </p>
              ))}
            </div>

            {/* Başlık */}
            <h3 className="mt-4 font-bold text-lg">{card.title}</h3>

            {/* Buton */}
            <button 
              className={`mt-5 px-6 py-2 rounded-full border text-sm font-bold transition-colors ${
                card.isDark 
                  ? 'border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900' 
                  : 'border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white'
              }`}
            >
              Submit Request
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OfficeCards;