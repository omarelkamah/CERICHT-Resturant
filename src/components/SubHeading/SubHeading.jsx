import React from 'react';

import {images} from '../../constants'

const SubHeading = ({title}) => (
  <div>
    <h3 style={{letterSpacing: "1px", textTransform: "capitalize"}}> {title} </h3>
    <img src={images.spoon} alt="" />
  </div>
);

export default SubHeading;
