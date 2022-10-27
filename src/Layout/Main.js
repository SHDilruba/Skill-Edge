import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ColorSchemesExample from '../components/Header/Header';
import { useState } from 'react';
import { NavLink } from 'react-bootstrap';

const Main = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div>
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
       <div className='header'>
          < ColorSchemesExample> </ColorSchemesExample>
           <NavLink><button onClick={()=> setDarkTheme(prevTheme => !prevTheme)} className='theme-btn btn btn-primary mt-3'>Dark/Light</button></NavLink>
       </div>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
    </div>
  );
};

export default Main;