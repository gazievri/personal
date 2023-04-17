import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Contact } from '../../pages/Contact';
import { Blog } from '../../pages/Blog';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { Post } from '../../pages/Post';

export const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/:id" element={<Post />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};
