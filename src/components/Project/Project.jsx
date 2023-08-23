import './Project.sass';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/modalSlice';
import { setActiveProject } from '../../store/activeProject';

export const Project = ({ project }) => {
  const { images, title } = project;
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    dispatch(setActiveProject(project));
    dispatch(openModal());
  };

  return (
    <div className="project">
      <div className="project__top-mask">
        <h3 className="project__title">{title}</h3>
      </div>
      <img src={images[0]} alt={title} className="project__img" />
      <div className="project__bottom-mask">
        <button
          className="project__btn"
          type="button"
          onClick={() => handleBtnClick()}
        >
          Learn more
        </button>
      </div>
    </div>
  );
};
