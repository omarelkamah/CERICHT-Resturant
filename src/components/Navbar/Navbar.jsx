import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import images from '../../constants/images'

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.scss';
import { useState } from 'react';

const Navbar = () => {

  const [close, setClose] = useState(false);

  return (
      <nav className='navbar'>
      <div className="navbar__logo">
        <img src={images.gericht} alt="" />
      </div>
      <ul className="navbar__list">
        <li className="p__opensans">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="p__opensans">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="p__opensans">
          <NavLink to="/menue">Menue</NavLink>
        </li>
        <li className="p__opensans">
          <NavLink to="/awords">Awords</NavLink>
        </li>
        <li className="p__opensans">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="navbar__login">
        <Link to="/login" className="p__opensans">Log In / Registration</Link>
        <div />
        <Link to="/" className="p__opensans">Book Table</Link>
      </div>
      <div className="navbar__small flex__center">
        <GiHamburgerMenu color="#fff" fontSize={27} className="navbar__small-open" onClick={() => setClose(true)} />
        {close && (
          <div className="navbar__small-overlay">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setClose(false)} />
            <ul className="navbar__small-list">
              <li className="p__opensans">
                <NavLink to="/" onClick={() => setClose(false)}>Home</NavLink>
              </li>
              <li className="p__opensans">
                <NavLink to="/about" onClick={() => setClose(false)}>About</NavLink>
              </li>
              <li className="p__opensans">
                <NavLink to="/menue" onClick={() => setClose(false)}>Menue</NavLink>
              </li>
              <li className="p__opensans">
                <NavLink to="/awords" onClick={() => setClose(false)}>Awords</NavLink>
              </li>
              <li className="p__opensans">
                <NavLink to="/contact" onClick={() => setClose(false)}>Contact</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
