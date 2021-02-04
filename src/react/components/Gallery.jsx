import React from 'react';

import Gallery from 'react-photo-gallery';

import Section from './Section';

const PHOTOS = [];

// const PHOTOS = [
//   {
//     src: '/1.jpg',
//     width: 1.5,
//     height: 2,
//   },
// ];

const SiteGallery = () => (
  <Section title="Photos" id="photos">
    <Gallery photos={PHOTOS} direction="row" />
  </Section>
);

export default SiteGallery;
