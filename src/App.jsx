import React from 'react';
import Navbar from './components/Navbar/Navbar';
import headerBg from './assets/HeroBG.png';

const App = () => {
  return (
    <>
      <header className='' style={{ backgroundImage: `url(${headerBg})` }}>
        <Navbar />
      </header>
    </>
  );
};

export default App;