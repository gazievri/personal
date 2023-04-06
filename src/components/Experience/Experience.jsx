import './Experience.sass';
import { technologies } from '../../data/experienceData';

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience__content">
        <h2 className="experience__title">EXPERIENCE</h2>
        <div className="experience__tech">
          {technologies.map((el) => (
            <img
              className="experience__icon"
              src={el.icon}
              alt={el.title}
              title={el.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
