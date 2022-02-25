import React from 'react';

import { Navbar } from './components';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import  AboutUsPage  from './pages/aboutUsPage/AboutUsPage';
import MenuePage from './pages/menuePage/MenuePage';
import { AwordPage } from './pages/awrdPage/AwordPage';
import { ContactPage } from './pages/contactPage/ContactPage';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/menue' element={<MenuePage />} />
        <Route path='/awords' element={<AwordPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
    
  </div>
);

export default App;
