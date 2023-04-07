import { Navmenu } from '../../components/Navmenu/Navmenu';
import './Header.sass';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const [isWhite, setIsWhite] = useState(false);

  // Get the button:
  let myheader = document.getElementById('headerMask');

  // When the user scrolls down 50px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setIsWhite(true);
    } else {
      setIsWhite(false);
    }
  }

  return (
    <header className={`header ${isWhite ? 'header__with-shadow' : ''}`}>
      <div
        className={`header__mask ${
          isWhite ? 'header__mask_status_hidden' : ''
        }`}
        id="headerMask"
      />
      <div className="header__content">
        <NavLink to="/" className="header__logo">
          RG
        </NavLink>
        <Navmenu />
      </div>
    </header>
  );
};
