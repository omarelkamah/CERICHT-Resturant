import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.scss';
import { LaurelsItem } from './LaurelsItem/LaurelsItem';

const Laurels = () => {
  return (
    <div className="app__bg aword">
      <div className="aword__left">
        <div className="aword__left-top">
          <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        </div>
        <div className="aword__left-bottom">
          {data.awards.map(item => (
            <LaurelsItem key={Math.random()} imgUrl={item.imgUrl} title={item.title} subtitle={item.subtitle} />
          ))}
        </div>
      </div>
      <div className="aword__right">
        <img src={images.laurels} alt="laues" />
      </div>
    </div>
  )
}

export default Laurels;
