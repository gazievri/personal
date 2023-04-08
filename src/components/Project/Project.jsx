import './Project.sass';

export const Project = ({ project, setModalIsOpened, setData }) => {
  const { images, title } = project;

  const handleBtnClick = () => {
    setData(project);
    setModalIsOpened(true);
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
