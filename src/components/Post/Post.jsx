import './Post.sass';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPostData } from '../../store/postSlice';

const options = { year: 'numeric', month: 'long', day: 'numeric' };

export const Post = ({ post }) => {
  const { date, title, text, slug } = post;
  const dateObj = new Date(date);
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    dispatch(setPostData(post));
    navigate(`/${slug}`);
  };

  return (
    <div className="post">
      <p className="post__date">{dateTimeFormat.format(dateObj)}</p>
      <h3 className="post__title">{title}</h3>
      <p className="post__text">{text}</p>
      <button className="post__btn" type="button" onClick={handleBtnClick}>
        Read more
      </button>
    </div>
  );
};
