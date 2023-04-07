import './Experience.sass';
import { technologies } from '../../data/experienceData';
import { Section } from '../Section/Section';
import { v4 as uuidv4 } from 'uuid';

const options = {
  id: 'experience',
  title: 'EXPERIENCE',
};

export const Experience = () => {
  return (
    <Section options={options}>
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
    </Section>
  );
};
