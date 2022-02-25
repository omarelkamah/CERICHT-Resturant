import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';

import './Header.scss';

const Header = () => (
  <header>
    <div className="header__info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="header__info-h1">The Key To Fine Dining</h1>
      <p className="p__opensans">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="header__image">
      <img src={images.welcome} alt="welcom img" />
    </div>
  </header>
);

export default Header;
