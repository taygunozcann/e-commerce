import React from 'react';

function ContactCTA() {
  return (
    <section className="py-20 px-6 text-center bg-white flex flex-col items-center justify-center space-y-6">
      {/* Kıvrık Ok İşareti Temsili */}
      <div className="text-sky-400 text-3xl animate-bounce">
        👇
      </div>
      
      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
        We Can't Wait To Meet You
      </span>
      
      <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
        Let's Talk
      </h2>
      
      <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3 rounded-md transition-colors shadow-md text-sm">
        Try it free now
      </button>
    </section>
  );
}

export default ContactCTA;
