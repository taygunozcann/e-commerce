import React from 'react';
import AboutHero from '../components/AboutComponents/AboutHero';
import AboutVision from '../components/AboutComponents/AboutVision';
import AboutStats from '../components/AboutComponents/AboutStats';
import AboutTeam from '../components/AboutComponents/AboutTeam';
import AboutClients from '../components/AboutComponents/AboutClients';
import AboutVideo from '../components/AboutComponents/AboutVideo';
import AboutBanner from '../components/AboutComponents/AboutBanner';

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutVision />
      <AboutStats />
      <AboutTeam />
      <AboutClients />
      <AboutVideo />
      <AboutBanner />
    </div>
  );
}

export default AboutPage;