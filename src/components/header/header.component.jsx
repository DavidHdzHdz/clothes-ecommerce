import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

import './header.styles.scss';


const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img src={logo} className='img-fluid' alt='gato gris joyeria logo'/>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop' >
          SHOP
        </Link>
        <Link className='option' to='/contact' >
          CONTACT
        </Link>
        <Link className='option' to='/sign' >
          SIGN IN
        </Link>
        <Link className='option' to='/cart' >
          SHOPPING CART
        </Link>
      </div>
    </div>
  )
}

export default Header;