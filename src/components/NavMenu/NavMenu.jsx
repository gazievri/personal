import './Navmenu.sass';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

export const Navmenu = ({inBurger = false}) => {
  return (
    <nav className={`navmenu ${inBurger ? 'navmenu_status_in-burger' : ''}`}>
      <ul className={`navmenu__list ${inBurger ? 'navmenu__list_status_in-burger' : ''}`}>
        <li className={`navmenu__item ${inBurger ? 'navmenu__item_status_in-burger' : ''}`}>
          <HashLink to="/#about">About</HashLink>
        </li>
        <li className={`navmenu__item ${inBurger ? 'navmenu__item_status_in-burger' : ''}`}>
          <HashLink to="/#experience">Experience</HashLink>
        </li>
        <li className={`navmenu__item ${inBurger ? 'navmenu__item_status_in-burger' : ''}`}>
          <HashLink to="/#projects">Projects</HashLink>
        </li>
        <li className={`navmenu__item ${inBurger ? 'navmenu__item_status_in-burger' : ''}`}>
          <a href="https://www.behance.net/ariannanas" target='_blank'>Disigner</a>
        </li>
        <li className={`navmenu__item ${inBurger ? 'navmenu__item_status_in-burger' : ''}`}>
          <NavLink to='contact'>Contact</NavLink>
        </li>
      </ul>
      <NavLink to='blog' className={`navmenu__blog ${inBurger ? 'navmenu__blog_status_in-burger' : ''}`}>Blog</NavLink>
    </nav>
  );
};
