import React from 'react';
import Navbar from './components/Navbar/Navbar';
import headerBg from './assets/HeroBG.png';
import HeroSection from './components/HeroSection/HeroSection';
import PopularDestinations from './components/PopularDestinations/PopularDestinations';

const App = () => {
  return (
    <>
      <header className='' style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar />
        <HeroSection />
      </header>

      <main>
        <PopularDestinations />
      </main>
    </>
  );
};

export default App;