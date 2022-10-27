  import React from 'react';
  import './Header.css';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
 import { NavLink } from 'react-router-dom';
 import logo from '../../images/logo (3).svg'
  
  function CollapsibleExample() {

    return (
      <div>
      <Navbar className='py-1 cover-area' collapseOnSelect expand="lg" bg="light"  variant="light">
        <Container>
          <div>
          <img id='logo' src={logo} alt="" />
          <Navbar.Brand className='title fs-3'>Skill Edge</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavLink className="menu" to="/">Home</NavLink>
            <NavLink className="menu" to="/courses">Courses</NavLink>
            <NavLink className="menu" to="/blog">Blog</NavLink>
            <NavLink className="menu" to="/faq">FAQ</NavLink>
            </Nav>
            <Nav>
            <NavLink className="menu fs-4" to='/login'>Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </div>
    );
  }
  
  export default CollapsibleExample;