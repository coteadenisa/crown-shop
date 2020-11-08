import React from 'react';
import { withRouter } from 'react-router-dom';

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div 
        className={`menu__item ${size}`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);