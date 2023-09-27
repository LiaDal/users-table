import React from "react";
import Button from 'react-bootstrap/Button';
import Userfront from '@userfront/toolkit'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Toolbar() {
  return (
    <Navbar bg="dark" sticky="top" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Tools</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end gap-3">
          <Button variant="outline-light" onClick={Userfront.logout}>Block</Button>
          <Button variant="outline-light" onClick={Userfront.logout}>Unblock</Button>
          <Button variant="danger" onClick={Userfront.logout}>Delete</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Toolbar;

