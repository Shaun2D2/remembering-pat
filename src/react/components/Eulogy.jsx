/* eslint-disable max-len */
import React from 'react';
import { Img } from 'react-image';

import Section from './Section';

import './Eulogy.scss';

const Eulogy = () => (
  <Section title="Remembering Patrick Lobsinger" id="eulogy">
    <div className="row">
      <div className="col-sm-4">
        <Img src="./pat-1.jpg" className="eulogy-image" alt="patrick lobsinger" />
      </div>
      <div className="col-sm-8">
        <p className="poem">
          <div className="poem__title">I Will Sleep</div>
          <br />
          They say I've been born
          <br />
          I've been handed hand to hand
          <br />
          I will sleep and you will watch me grow
          <br />
          Into the years, everyone will know
          <br />
          I will be, the next one to get old
          <br />
          I only stand when I'm in someone's hands
          <br />
          I don't know where I am
          <br />
          I will sleep and you will watch me grow
          <br />
          Don't close your eyes, or you will miss my show
          <br />
          For now I'll smile, cuz I can't say hello
          <br />
          I will sleep and you will watch me grow
          <br />
          I'll never have it so good.
        </p>
        <p className="poem__attribution">
          - Patrick Lobsinger (6/28/1981)
        </p>

      </div>
    </div>
  </Section>
);

export default Eulogy;
