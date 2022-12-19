import PopupWithForm from './PopupWithForm.js';

function PopupAddPlace({ isOpen, onClose }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('newPlace')
  }
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      textBtn="Добавить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="name"
        name="name"
        placeholder="Название"
        className="popup__input popup-add__input-name"
        required
        minLength={2}
        maxLength={30}
      />
      <span className="form__input-error name-error"></span>

      <input
        id="url"
        type="url"
        name="url"
        placeholder="Ссылка на картинку"
        className="popup__input popup-add__input-link"
        required
        minLength={2}
        maxLength={30}
      />
      <span className="form__input-error url-error"></span>
    </PopupWithForm>
  );
}

export default PopupAddPlace;
