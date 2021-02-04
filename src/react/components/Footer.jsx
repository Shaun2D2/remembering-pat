import React from 'react';

import Heart from './icons/Heart';

import './Footer.scss';

const Footer = () => (
  <div className="app-footer">
    <div className="container">
      <p>
        You will forever be in our hearts Uncle Pat
      </p>
      <p>
        Made with
        {' '}
        <Heart />
        {' '}
        by Shaun
      </p>
    </div>
  </div>
);

export default Footer;
