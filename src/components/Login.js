import React from 'react';
import { Link } from 'react-router-dom';
import Userfront, { LoginForm } from '@userfront/toolkit/react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

Userfront.init("demo1234");

export default function Home() {
  return (
    <>
      <Navbar bg="dark" sticky="top" data-bs-theme="dark">
      <Container>
        <Navbar.Collapse className="justify-content-end gap-3">
          <Link to="/dashboard" className='text-light m-3'>Dashboard</Link>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <div className='m-3'>
      <LoginForm/>
      </div>
    </>        
  );
}