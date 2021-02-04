import React from 'react';

import Gallery from 'react-photo-gallery';

import Section from './Section';

const PHOTOS = [
  {
    src: '/pat-1.jpg',
    width: 1.5,
    height: 2,
  },
  {
    src: '/pat-3.jpg',
    width: 1.5,
    height: 2,
  },
  {
    src: '/pat-4.jpg',
    width: 3,
    height: 2,
  },
  {
    src: '/pat-5.jpg',
    width: 3,
    height: 2,
  },
  {
    src: '/pat-6.jpg',
    width: 2,
    height: 2,
  },
  {
    src: '/pat-7.jpg',
    width: 3,
    height: 3,
  },
];

const SiteGallery = () => (
  <Section title="Photos" id="photos">
    <Gallery photos={PHOTOS} direction="row" />
  </Section>
);

export default SiteGallery;
