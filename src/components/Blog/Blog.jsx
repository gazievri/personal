import './Blog.sass';
import { Section } from '../Section/Section';
import { Post } from '../Post/Post';
import { POSTS } from '../../data/postsData';
import { v4 as uuidv4 } from 'uuid';

const options = {
  id: 'blog',
  title: 'BLOG',
};

export const Blog = () => {
  return (
    <>
      <Section options={options}>
        <ul className="blog__posts">
          {POSTS.slice(0,2).map((post) => (
            <li key={uuidv4()}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};
