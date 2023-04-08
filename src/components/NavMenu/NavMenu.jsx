import './Navmenu.sass';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

export const Navmenu = () => {
  return (
    <nav className="navmenu">
      <ul className="navmenu__list">
        <li className="navmenu__item">
          <HashLink to="/#about">About</HashLink>
        </li>
        <li className="navmenu__item">
          <HashLink to="/#experience">Experience</HashLink>
        </li>
        <li className="navmenu__item">
          <HashLink to="/#projects">Projects</HashLink>
        </li>
        <li className="navmenu__item">
          <a href="https://www.behance.net/ariannanas" target='_blank'>Disigner</a>
        </li>
        <li className="navmenu__item">
          <NavLink to='contact'>Contact</NavLink>
        </li>
      </ul>
      <NavLink to='blog' className="navmenu__blog">Blog</NavLink>
    </nav>
  );
};
