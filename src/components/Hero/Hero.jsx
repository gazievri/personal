import './Hero.sass';
import { Button } from '../Button/Button';
import portrait from '../../assets/images/portrait.webp'

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__title-block">
          <h1 className="hero__title">Freelance Web</h1>
          <h2 className="hero__subtitle">Developer</h2>
          <Button title='Get in touch' action={() => alert('Button is pressed')} />
        </div>
        <img src={portrait} className='hero__portrait' alt='Portrait of Ruslan Gaziev, frontend developer' />
      </div>
    </section>
  );
};
