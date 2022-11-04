  import React, { useState } from 'react';
  import './Header.css';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
 import { Link, NavLink } from 'react-router-dom';
 import logo from '../../images/logo (3).svg'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import Fade from 'react-bootstrap/Fade';
  
  function Header() {
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

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
            <NavLink className="menu" to='/Login'>
              { user ? 
               <div className='d-flex mt-2'>
                   <div className='me-2' onMouseOver={() => setOpen(!open)}
                    aria-controls="example"
                    aria-expanded={open}>
                    <Image roundedCircle src={user.photoURL} style={{height:'30px' }}></Image>
                </div>
                <Fade in={open}>
        <div id="example" className='mt-1'>
            <p> {user.displayName} </p>
        </div>
      </Fade> 
               </div>
              : 
               <div className='text-primary fs-5'
               > 
               Login
               </div>
              }
             </NavLink>           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </div>
    );
  }
  
  export default Header;