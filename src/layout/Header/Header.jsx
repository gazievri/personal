import './Header.sass';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Navmenu } from '../../components/Navmenu/Navmenu';
import useMediaQuery from '../../utils/useMediaQuery';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';

export const Header = () => {
  const isTablet = useMediaQuery('(max-width: 950px)');
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header__content">
          <NavLink to="/" className="header__logo">
            RG
          </NavLink>

          {!isTablet ? (
            <Navmenu />
          ) : (
            <button className="header__burger" onClick={handleBurgerClick}>
              <div className={`header__burger-line ${isBurgerOpen ? 'header__burger-line-first_status_opened' : ''}`}></div>
              <div className={`header__burger-line ${isBurgerOpen ? 'header__burger-line-second_status_opened' : ''}`}></div>
              <div className={`header__burger-line ${isBurgerOpen ? 'header__burger-line-third_status_opened' : ''}`}></div>
            </button>
          )}
        </div>
      </header>
      {
        isTablet ? <BurgerMenu isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} /> : ''
      }
    </>
  );
};
