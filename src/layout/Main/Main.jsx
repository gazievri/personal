import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Contact } from '../../pages/Contact';
import { Blog } from '../../pages/Blog';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { Post } from '../../pages/Post';


export const Main = () => {
  const {pathname} = useLocation();

  // Каждый раз при именение url перемещаемся в начало страницы
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

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
