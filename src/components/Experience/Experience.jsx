import './Experience.sass';
import { technologies } from '../../data/experienceData';
import { Section } from '../Section/Section';
import { v4 as uuidv4 } from 'uuid';
import Confetti from '../Confetti/Confetti';
import { useState } from 'react';

const options = {
  id: 'experience',
  title: 'EXPERIENCE',
};

export const Experience = () => {
  const [techs, setTechs] = useState(technologies);
  const [isVisible, setIsVisible] = useState(false);
  const [coordinatesFire, setCoordinatesFire] = useState({});

  const handleClick = (id) => {
    // Опеределяем координаты клика
    const clickCoordinates = document
      .getElementById(id)
      .getBoundingClientRect();
    // Определяем размеры экрана
    const screenDemensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Вычисляем и устанавливаем координаты коффети
    setCoordinatesFire({
      x: clickCoordinates.x / screenDemensions.width,
      y: clickCoordinates.y / screenDemensions.height,
    });

    setTechs(techs.filter((el) => el.id !== id));
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  };

  return (
    <Section options={options}>
      <div className="experience__tech">
        {techs.length === 0 ? (
          <p>Ups... Start from scratch!</p>
        ) : (
          techs.map((el) => (
            <>
              <img
                className="experience__icon"
                src={el.icon}
                alt={el.title}
                id={el.id}
                key={uuidv4()}
                onClick={() => handleClick(el.id)}
              />
              {isVisible && <Confetti coordinates={coordinatesFire} />}
            </>
          ))
        )}
      </div>
    </Section>
  );
};
