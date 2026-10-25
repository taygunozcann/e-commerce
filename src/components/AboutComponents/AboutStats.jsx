import React from 'react';

function AboutStats() {
  const stats = [
    { id: 1, value: '15K', label: 'Happy Customers' },
    { id: 2, value: '150K', label: 'Monthly Visitors' },
    { id: 3, value: '15', label: 'Countries Worldwide' },
    { id: 4, value: '100+', label: 'Top Partners' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="space-y-2">
            <p className="text-5xl font-extrabold text-slate-950 tracking-tight">{stat.value}</p>
            <p className="text-slate-500 font-bold text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutStats;