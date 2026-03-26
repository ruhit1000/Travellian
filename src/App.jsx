import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import headerBg from './assets/HeroBG.png';
import HeroSection from './components/HeroSection/HeroSection';
import PopularDestinations from './components/PopularDestinations/PopularDestinations';
import axios from 'axios';

const destinationsPromise = axios.get('/popularDestination.json');

const App = () => {
  return (
    <>
      <header className='' style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar />
        <HeroSection />
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
          <PopularDestinations destinationsPromise={destinationsPromise} />
        </Suspense>
      </main>
    </>
  );
};

export default App;