  import React from 'react';
  import './Header.css';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
 import { NavLink } from 'react-router-dom';
 import logo from '../../images/logo (3).svg'
  
  function CollapsibleExample() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <img id='logo' src={logo} alt="" />
          <Navbar.Brand href="#home">Skill Edge</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavLink className="menu" to="/">Home</NavLink>
            <NavLink className="menu" to="/courses">Courses</NavLink>
            <NavLink className="menu" to="/blog">Blog</NavLink>
            <NavLink className="menu" to="/faq">FAQ</NavLink>
            </Nav>
            <Nav>
            <NavLink className="menu pt-1" to='/login'>Login</NavLink>
            <NavLink className="menu" to='/register'><button className='btn btn-info' >Register</button></NavLink>
            <NavLink><button className='btn btn-dark'>Dark/Light</button></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default CollapsibleExample;