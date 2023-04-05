import './NavMenu.sass'
import { HashLink } from "react-router-hash-link";

export const NavMenu = () => {
  return (
    <nav className='navmenu'>
      <ul className='navmenu__list'>
        <li className='navmenu__item'>
          <HashLink to="">About</HashLink>
        </li>
        <li className='navmenu__item'>
          <HashLink to="">Experience</HashLink>
        </li>
        <li className='navmenu__item'>
          <HashLink to="">Projects</HashLink>
        </li>
        <li className='navmenu__item'>
          <HashLink to="">Disigner</HashLink>
        </li>
        <li className='navmenu__item'>
          <HashLink to="">Contact</HashLink>
        </li>
        <li className='navmenu__item'>
          <HashLink to="">Blog</HashLink>
        </li>
      </ul>
    </nav>
  );
};
