import React from 'react';
import commitGlobalLogo from './../../../assets/images/commit-global-logo-white.svg';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-black text-white w-full px-4 py-6 lg:px-40 md:px-8 md:justify-between">
      <div className='flex gap-4 flex-col md:flex-row'>
        <div className='flex flex-col'>
          <span className='footer-title pb-4'>Link-uri utile</span>
          <span className='footer-url'>Doneaza</span>
          <span className='footer-url'>Despre proiect</span>
          <span className='footer-url'>Codul sursa</span>
        </div>
        <div className='flex flex-col'>
          <span className='footer-title pb-4'>Informatii legale</span>
          <span className='footer-url'>Politica de confidentialitate</span>
          <span className='footer-url'>Termeni si conditii</span>
        </div>
      </div>
      <div className='flex flex-col md:items-end'>
        <img src={commitGlobalLogo} alt="Commit Global" className="w-32 pb-4" />
        <span className='footer-text'>© 2022 Commit Global.</span>
        <span className='footer-text'>Organizație neguvernamentală independentă, neafiliată politic și apolitică.</span>
      </div>
    </div>
  );
};

export default Footer;
