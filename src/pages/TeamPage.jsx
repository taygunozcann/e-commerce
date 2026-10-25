import React from 'react';
import TeamHero from '../components/TeamComponents/TeamHero';
import TeamList from '../components/TeamComponents/TeamList';
import TeamCTA from '../components/TeamComponents/TeamCTA';

function TeamPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <TeamHero />
      <TeamList />
      <TeamCTA />
    </div>
  );
}

export default TeamPage;