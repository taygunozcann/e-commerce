import React from 'react';
import TeamCard from '../TeamComponents/TeamCard';


function AboutTeam() {
  const leaders = [
    { id: 1, name: 'Username', profession: 'Profession', image: 'https://unsplash.com' },
    { id: 2, name: 'Username', profession: 'Profession', image: 'https://unsplash.com' },
    { id: 3, name: 'Username', profession: 'Profession', image: 'https://unsplash.com' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      {/* Başlık Bloğu */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl font-bold text-slate-950">Meet Our Team</h2>
        <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* TeamCard Kullanılan Grid Alanı */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {leaders.map((leader) => (
          <TeamCard 
            key={leader.id}
            name={leader.name}
            profession={leader.profession}
            image={leader.image}
            facebookUrl="#"
            instagramUrl="#"
            twitterUrl="#"
          />
        ))}
      </div>
    </section>
  );
}

export default AboutTeam;