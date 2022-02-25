import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.scss';

const Chef = () => (
  <div className="chef app__bg">
    <div className="chef__img">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="chef__info">
      <SubHeading title="Chef's word" />
      <h2 className="chef__info-heading headtext__cormorant">What we believe in</h2>
      <div className="chef__info-content">
        <div className="chef__content-quote">
          <img src={images.quote} alt="quoteimage" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>
      <div className="chef__info-name">
        <h3 className='chef__name'>Kevin Luo</h3>
        <h3 className="chef__job">Chef & Founder</h3>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
