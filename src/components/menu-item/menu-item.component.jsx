import React, { useState } from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match  }) => {

  const [ isHovered, setIsHovered ] = useState(false);

  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${match.url === '/' ? '' : '/'}${linkUrl}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
      </div>
      <div
        className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className={`subtitle ${isHovered && 'hovered'}`}>Ver más</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);
