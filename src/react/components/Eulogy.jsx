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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum, eros nec euismod porttitor, metus velit congue diam, in rhoncus sapien erat quis augue. Donec non enim sed velit ornare auctor vel non sapien. Pellentesque maximus sapien ut enim dignissim, ut consectetur dolor consequat. Sed accumsan dapibus enim, non dictum nisi ullamcorper eu. Nulla viverra nisi non porta lobortis. Cras lorem massa, condimentum ut lacinia id, condimentum ac mauris. Morbi sit amet arcu porta, molestie tellus non, iaculis est. Morbi in justo libero. Nunc et sollicitudin nisl.</p>
        <p>Nam eget nisl id orci accumsan pharetra. Duis hendrerit tristique turpis vel ullamcorper. Suspendisse potenti. Donec in quam porttitor, varius ipsum sed, condimentum eros. Aenean elit urna, sagittis ut magna ac, pretium mollis velit. Ut sagittis, velit in posuere malesuada, est mauris hendrerit purus, ac placerat libero diam in justo. Nunc pretium eget ex tempus laoreet. Phasellus porta arcu ut erat accumsan, in finibus nibh ultricies. Etiam libero libero, fringilla eget volutpat eu, sagittis ac felis. Nam pharetra quam eu hendrerit pretium. Integer hendrerit ultricies mi et egestas. Curabitur sit amet dui nec lectus tempor placerat lobortis at magna. Sed id mauris eu ante sollicitudin fringilla sed a diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      </div>
    </div>
  </Section>
);

export default Eulogy;
