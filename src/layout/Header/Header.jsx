import { NavMenu } from '../../components/Navmenu/Navmenu';
import './Header.sass';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <NavLink to="/" className="header__logo">
          RG
        </NavLink>
        <NavMenu />
      </div>
    </header>
  );
};
