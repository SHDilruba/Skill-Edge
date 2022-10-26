import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ColorSchemesExample from '../components/Header/Header';
import Cover from '../Cover/Cover';

const Main = () => {
  return (
    <div>
       < ColorSchemesExample></ColorSchemesExample>
       <Cover></Cover>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  );
};

export default Main;