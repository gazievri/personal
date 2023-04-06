import './Experience.sass';
import { technologies } from '../../data/experienceData';
import { v4 as uuidv4 } from "uuid";

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
              key={uuidv4()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
