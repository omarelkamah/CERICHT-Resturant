import React from 'react'
import './LaurelsItem.scss'

export const LaurelsItem = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="awordItem">
        <div className="awordItem__img">
            <img src={imgUrl} alt="" />
        </div>
        <div className="awordItem__info">
            <h3 className='p__cormorant'>{title}</h3>
            <p className='p__opensans'>{subtitle}</p>
        </div>
    </div>
  )
}
