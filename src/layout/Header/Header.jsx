import './Header.sass';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Navmenu } from '../../components/Navmenu/Navmenu';

export const Header = () => {
  return (
    <header className='header'>
      <div className="header__content">
        <NavLink to="/" className="header__logo">
          RG
        </NavLink>
        <Navmenu />
      </div>
    </header>
  );
};
