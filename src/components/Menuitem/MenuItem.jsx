import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, price, tages }) => (
  <div className='menuitem'>
      <div className="menuitem__head">
        <h4 className="menuitem__heading">{title}</h4>
        <div className="menuitem__head-pric">
          <div />
          <p>{price}</p>
        </div>
      </div>
      <p className="menuitem__tages">{tages}</p>
  </div>
);

export default MenuItem;
