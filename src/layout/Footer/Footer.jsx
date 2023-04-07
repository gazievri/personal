import './Footer.sass';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__info">
          <div className="footer__text">
            <h3 className="footer__title">NEED A WEB DEVELOPER?</h3>
            <p className="footer__subtitle">LET’S BUILD SOMETHING AWESOME.</p>
            <button className='footer__btn'>Get in touch</button>
          </div>
          <ul className='footer__links'>
            <li className='footer__link'>
              <a href="">EMAIL</a>
            </li>
            <li className='footer__link'>
              <a href="https://github.com/gazievri" target='_blank'>GITHUB</a>
            </li>
            <li className='footer__link'>
              <a href="">LINKEDIN</a>
            </li>
            <li className='footer__link'>
              <a href="">CV</a>
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
