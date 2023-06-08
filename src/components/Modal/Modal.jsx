import './Modal.sass';

export const Modal = ({ modalIsOpened, data, setModalIsOpened }) => {
  const { title, images, url, description } = data;

  const handleBtnClose = () => {
    setModalIsOpened(false);
  };

  // Закрытие модального окна при клике по оверлею
  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) handleBtnClose();
  };

  return (
    <div className={`modal ${modalIsOpened ? 'modal_status_opened' : ''}`} onClick={handleClickOverlay}>
      <div className="modal__popup">
        <div className="modal__img-container">
          <img src={images[0]} alt="" className="modal__img" />
        </div>
        <div className="modal__info-block">
          <h2 className="modal__title">{title}</h2>
          <p className="modal__description">{description}</p>
          <div className="modal__btn-block">
            {
              url ?             <a href={url} className="modal__btn-view" target="_blank">
              View site
            </a> : ""
            }
            <button className="modal__btn-close" onClick={handleBtnClose} />
          </div>
        </div>
      </div>
    </div>
  );
};
