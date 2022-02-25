import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images , data } from '../../constants';

import './SpecialMenu.scss';

const SpecialMenu = () => (
  <div className="specialMenue">
    <div className="specialMenue__head">
      <SubHeading title="Menu that fits your palatte" />
      <h2 className="specialMenue__head-header">Today &apos;s Special</h2>
    </div>
    <div className="specialMenue__wrapper">
      <div className="sepcialMenue__left">
        <h3 className="specialMenue__heading">juice & drinks</h3>
        {data.juice.map(item => (
          <MenuItem key={Math.random()} title={item.title} price={item.price} tages={item.tags}/>
        ))}
      </div>
      <div className="sepcialMenue__center">
        <img src={images.menu} alt="img menue" />
      </div>
      <div className="sepcialMenue__right">
        <h3 className="specialMenue__heading">cocktails</h3>
        {data.cocktails.map(item => (
          <MenuItem key={Math.random()} title={item.title} price={item.price} tages={item.tags}/>
        ))}
      </div>
    </div>
  </div>
);

export default SpecialMenu;
