import React from 'react';

import { Navbar, Nav, Button } from 'react-bootstrap';

const { Brand, Toggle, Collapse } = Navbar;
const { Link } = Nav;

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Brand href="#home">Patrick Lobsinger</Brand>
    <Toggle aria-controls="basic-navbar-nav" />
    <Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link href="#eulogy">Eulogy</Link>
        <Link href="#photos">Photos</Link>
        <Link href="#memories">Memories</Link>
        <Link href="#tribute">Tribute</Link>
      </Nav>
    </Collapse>
  </Navbar>
);

export default Navigation;
