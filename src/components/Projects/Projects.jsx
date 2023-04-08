import './Projects.sass';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Section } from '../Section/Section';
import { Project } from '../Project/Project';
import { PROJECTS } from '../../data/projectsData';
import { Modal } from '../Modal/Modal';

const FILTERS_TITLE = [
  {
    filter: 'All',
    id: 1,
  },
  {
    filter: 'React-js',
    id: 2,
  },
  {
    filter: 'Javascript',
    id: 3,
  },
  {
    filter: 'TypeScript',
    id: 4,
  },
  {
    filter: 'React-Native',
    id: 5,
  },
];

const OPTIONS = {
  id: 'projects',
  title: 'PROJECTS',
};

export const Projects = ({ setModalIsOpened, modalIsOpened }) => {
  const [activeFilter, setActiveFilter] = useState(1);

  const [data, setData] = useState({});

  const handleFilterClick = (id) => {
    setActiveFilter(id);
  };

  return (
    <Section options={OPTIONS}>
      <ul className="projects__filters">
        {FILTERS_TITLE.map((el) => (
          <li className="project__filter" key={uuidv4()}>
            <button
              className={`project__filter-btn ${
                activeFilter === el.id ? 'project__filter-btn_type_active' : ''
              }`}
              type="button"
              onClick={() => handleFilterClick(el.id)}
            >
              {el.filter}
            </button>
          </li>
        ))}
      </ul>
      <ul className="projects__list">
        {PROJECTS.map((el) => (
          <li className="project__list-item" key={uuidv4()}>
            <Project
              project={el}
              setModalIsOpened={setModalIsOpened}
              setData={setData}
            />
          </li>
        ))}
      </ul>
      {data.title && (
        <Modal
          modalIsOpened={modalIsOpened}
          setModalIsOpened={setModalIsOpened}
          data={data}
        />
      )}
    </Section>
  );
};
