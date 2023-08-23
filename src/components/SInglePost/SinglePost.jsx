import './SinglePost.sass';
import { useLocation } from 'react-router-dom';
import { POSTS } from '../../data/postsData';

const options = { year: 'numeric', month: 'long', day: 'numeric' };

export const SinglePost = () => {
  const { pathname } = useLocation();
  const postData = POSTS.filter(
    (el) => el.slug === pathname.replace('/', '')
  )[0];
  const dateObj = new Date(postData.date);
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', options);

  return (
    <section className="single-post">
      <div className="single-post__cover"></div>
      <article className="single-post__content">
        <h1 className="single-post__title">{postData.title}</h1>
        <p className="single-post__subtitle">
          Posted: {dateTimeFormat.format(dateObj)}
        </p>
        <div className='single-post__paragraphs'>
          {postData.texts.map((el) => (
            <p className='single-post__paragraph' key={el.id}>{el.text}</p>
          ))}
        </div>
      </article>
    </section>
  );
};
