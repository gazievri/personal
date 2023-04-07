import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Experience } from '../components/Experience/Experience';
import { Projects } from '../components/Projects/Projects';
import { Blog } from '../components/Blog/Blog';
import { Contact } from '../components/Contact/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};
