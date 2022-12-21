function CardPopup({ isOpen, onClose }) {
  return (
    <div className={`popup popup-card` + (isOpen && ' popup_opened')}>
      <div className="popup-card__container">
        <h2 className="popup-card__text"></h2>
        <img src="#" alt="#" className="popup-card__img" />
        <button type="button" className="popup__close-btn popup-card__close-btn"></button>
      </div>
    </div>
  );
}
export default CardPopup;
