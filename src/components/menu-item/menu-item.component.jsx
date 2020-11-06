import React from 'react';

import "./menu-item.styles.scss";

export const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`menu__item ${size}`}>
        <div className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='menu__item__content'>
            <h1 className='menu__item__content__title'>
                {title}
            </h1>
            <span className='menu__item__content__subtitle'>
                Shop now
            </span>
        </div>
    </div>
)