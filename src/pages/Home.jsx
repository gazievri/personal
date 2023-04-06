import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Experience } from '../components/Experience/Experience';
import { Projects } from '../components/Projects/Projects';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </>
  );
};
