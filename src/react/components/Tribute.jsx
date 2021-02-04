import React from 'react';

import Section from './Section';

const Tribute = () => (
  <Section title="Tribute" id="tribute">
    <div className="row">
      <div className="col-sm-8 offset-2">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/2Nygap-HB2s" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

        <a href="https://www.youtube.com/watch?v=2Nygap-HB2s&ab_channel=JimDiBattista" target="_blank" rel="noreferrer noopener">see on Youtube</a>
      </div>
    </div>

  </Section>
);

export default Tribute;
