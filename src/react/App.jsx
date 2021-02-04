import React from 'react';

import Navigation from './components/Navigation';
import Memories from './components/Memories';
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
    <DividerSection quote="Your life was a blessing, your memory a treasure, you are loved beyond words and missed beyond measure." />
    <Gallery />
    <DividerSection quote="Those we love don't go away, they walk beside us everyday." className="divider-section--blossom-2" />
    <Memories />
    <Footer />
  </div>
);

export default App;
