import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

export const Header = () => {
  return (
    <div>
        <Navbar 
        collapseOnSelect
        bg='info'
        variant='dark'
        expand="md">
           <Navbar.Brand>
               CRM
           </Navbar.Brand> 
           <NavbarToggle
           aria-controls='basic-navbar-nav' />
           <NavbarCollapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/dashboard">Tickets</Nav.Link>
                <Nav.Link href="/dashboard">Logout</Nav.Link>
              </Nav>
           </NavbarCollapse>
        </Navbar>
    </div>
  )
}
