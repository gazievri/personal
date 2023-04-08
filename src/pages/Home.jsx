import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Experience } from '../components/Experience/Experience';
import { Projects } from '../components/Projects/Projects';
import { Blog } from '../components/Blog/Blog';
import { useState } from 'react';

export const Home = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects
        setModalIsOpened={setModalIsOpened}
        modalIsOpened={modalIsOpened}
      />
      <Blog />
    </>
  );
};
