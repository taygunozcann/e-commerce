import React from 'react';
import ContactHero from '../components/ContactComponents/ContactHero';
import OfficeCards from '../components/ContactComponents/OfficeCards';
import ContactCTA from '../components/ContactComponents/ContactCTA';

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <OfficeCards />
      <ContactCTA />
    </div>
  );
}

export default ContactPage;