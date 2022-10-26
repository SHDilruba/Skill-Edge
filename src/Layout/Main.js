import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ColorSchemesExample from '../components/Header/Header';

const Main = () => {
  return (
    <div>
       < ColorSchemesExample></ColorSchemesExample>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  );
};

export default Main;