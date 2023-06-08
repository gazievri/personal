import './BlogPage.sass';
import { POSTS } from '../../data/postsData';
import { Post } from '../Post/Post';
import { v4 as uuidv4 } from 'uuid';

export const BlogPage = () => {
  const devidePosts = (posts) => {
    let size = 2; //размер подмассива
    let subarray = []; //массив в который будет выведен результат.
    for (let i = 0; i < Math.ceil(posts.length / size); i++) {
      subarray[i] = posts.slice(i * size, i * size + size);
    }
    return subarray;
  };

  
  return (
    <section className="blog-page">
      <div className="blog-page__cover">
        <div className="blog-page__content">
          <h2 className="blog-page__title">NEWS</h2>
        </div>
      </div>
      <div className="blog-page__content">
        {devidePosts(POSTS).map((group) => (
          <ul className="blog-page__posts" key={uuidv4()}>
            {group.map((post) => (
              <li key={uuidv4()}>
                <Post post={post} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};
