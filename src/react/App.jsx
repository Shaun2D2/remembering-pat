import React from 'react';

import Navigation from './components/Navigation';
import Memories from './components/Memories';
import Tribute from './components/Tribute';
import Gallery from './components/Gallery';
import Eulogy from './components/Eulogy';
import Footer from './components/Footer';

import Hero from './components/Hero';

import './App.scss';
import DividerSection from './components/DividerSection';

const App = () => (
  <div>
    <Navigation />
    <Hero />
    <Eulogy />
    <DividerSection quote="A great soul serves everyone all the time. A great soul never dies. It brings us together again and again." />
    <Gallery />
    <DividerSection quote="Wherever a beautiful soul has been, there is a trail of beautiful memories." className="divider-section--2" />
    <Tribute />
    <DividerSection quote="What we once enjoyed and deeply loved we can never lose, for all that we love deeply becomes part of us." className="divider-section--3" />
    <Memories />
    <Footer />
  </div>
);

export default App;
