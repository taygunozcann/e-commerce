import React from 'react';
import TeamCard from './TeamCard';

function TeamList() {
  // Mock veri seti (Görseldeki 9 farklı pozu simüle eden hazır Unsplash fotoğrafları)
  const teamMembers = [
    { id: 1, name: 'Gökhan Özdemir', profession: 'Project Manager', image: 'https://unsplash.com' },
    { id: 2, name: 'Taygun Özcan', profession: 'Full Stack Developer', image: 'https://unsplash.com' },
    { id: 3, name: 'Username', profession: 'Profession', image: 'https://unsplash.com' },
    { id: 4, name: 'Username', profession: 'Profession', image: 'https://unsplash.com' },
    { id: 5, name: 'Username', profession: 'Profession', image: 'https://unsplash.com' },
    { id: 6, name: 'Username', profession: 'Profession', image: 'https://unsplash.com' },
    { id: 7, name: 'Username', profession: 'Profession', image: 'https://unsplash.com' },
    { id: 8, name: 'Username', profession: 'Profession', image: 'https://unsplash.com' },
    { id: 9, name: 'Username', profession: 'Profession', image: 'https://unsplash.com' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Meet Our Team</h2>
      
      {/* 3 Sütunlu Responsive Düzen (Mobilde 1, Tablette 2, Masaüstünde 3 sütun) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 max-w-5xl mx-auto">
        {teamMembers.map((member) => (
          <TeamCard 
            key={member.id}
            name={member.name}
            profession={member.profession}
            image={member.image}
            facebookUrl="#"
            instagramUrl="#"
            twitterUrl="#"
          />
        ))}
      </div>
    </section>
  );
}

export default TeamList;