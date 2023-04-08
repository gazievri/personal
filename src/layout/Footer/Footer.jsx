import { Button } from '../../components/Button/Button';
import './Footer.sass';
import { NavLink } from 'react-router-dom';

export const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__info">
          <div className="footer__text">
            <h3 className="footer__title">NEED A WEB DEVELOPER?</h3>
            <p className="footer__subtitle">LET’S BUILD SOMETHING AWESOME.</p>
            <Button title='Get in touch' />
          </div>
          <ul className='footer__links'>
            <li className='footer__link'>
              <a href="mailto:ruslan@gaziev.site" target="_blank">EMAIL</a>
            </li>
            <li className='footer__link'>
              <a href="https://github.com/gazievri" target='_blank'>GITHUB</a>
            </li>
            <li className='footer__link'>
              <a href="https://www.linkedin.com/in/gazievr/" target="_blank">LINKEDIN</a>
            </li>
            <li className='footer__link'>
              <a href="https://drive.google.com/file/d/1TNEEODdToNKlyBFkGcO3_RxbV19-NY3L/view?usp=share_link" target='_blank'>CV</a>
            </li>
            <li className='footer__link'>
              <a href="https://www.behance.net/ariannanas" target='_blank'>DESIGNER</a>
            </li>
          </ul>
        </div>
        <p className="footer__copyright">© Copyright 2023 − Ruslan Gaziev</p>
      </div>
    </footer>
  );
};
