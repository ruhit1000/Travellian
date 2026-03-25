import React from 'react';
import Navbar from './components/Navbar/Navbar';
import headerBg from './assets/HeroBG.png';
import HeroSection from './components/HeroSection/HeroSection';

const App = () => {
  return (
    <>
      <header className='' style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar />
        <HeroSection />
      </header>
    </>
  );
};

export default App;