import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  const history = useNavigate()

  function logMeOut(){
    return history("/");
  }
  
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
                <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
                <LinkContainer to="/tickets"><Nav.Link>Tickets</Nav.Link></LinkContainer>
               
                <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
                
              </Nav>
           </NavbarCollapse>
        </Navbar>
    </div>
  )
}
