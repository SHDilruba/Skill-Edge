import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ColorSchemesExample from '../components/Header/Header';
import Cover from '../Cover/Cover';
import { useState } from 'react';
import { NavLink } from 'react-bootstrap';

const Main = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
       <div className='header'>
          < ColorSchemesExample> </ColorSchemesExample>
           <NavLink><button onClick={()=> setDarkTheme(prevTheme => !prevTheme)} className='theme-btn btn btn-primary'>Dark/Light</button></NavLink>
       </div>
       <Cover></Cover>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  );
};

export default Main;