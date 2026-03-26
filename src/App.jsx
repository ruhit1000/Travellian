import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import headerBg from './assets/HeroBG.png';
import HeroSection from './components/HeroSection/HeroSection';
import PopularDestinations from './components/PopularDestinations/PopularDestinations';
import axios from 'axios';
import Skeleton from './components/Skeleton/Skeleton';
import SpecialOffer from './components/SpecialOffer/SpecialOffer';
import Blog from './components/Blog/Blog';
import GuidedTours from './components/GuidedTours/GuidedTours';
import DestinationGallery from './components/DestinationGallery/DestinationGallery';

const destinationsPromise = axios.get('/popularDestination.json');
const specialOfferPromise = axios.get('/specialOffers.json');
const blogPostsPromise = axios.get('/blogPosts.json');
const guidedToursPromise = axios.get('/guidedTours.json');
const destinationGalleryPromise = axios.get('/destinationGallery.json');

const App = () => {
  return (
    <>
      <header className='' style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar />
        <HeroSection />
      </header>

      <main>
        <Suspense fallback={<Skeleton />}>
          <PopularDestinations destinationsPromise={destinationsPromise} />
        </Suspense>
        
        <Suspense fallback={<Skeleton />}>
          <SpecialOffer specialOfferPromise={specialOfferPromise} />
        </Suspense>

        <Suspense fallback={<Skeleton />}>
          <Blog blogPostsPromise={blogPostsPromise} />
        </Suspense>

        <Suspense fallback={<Skeleton />}>
          <GuidedTours guidedToursPromise={guidedToursPromise} />
        </Suspense>

        <Suspense fallback={<Skeleton />}>
          <DestinationGallery destinationGalleryPromise={destinationGalleryPromise} />
        </Suspense>
      </main>
    </>
  );
};

export default App;