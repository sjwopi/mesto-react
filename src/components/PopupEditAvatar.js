import PopupWithForm from './PopupWithForm.js';

function PopupEditAvatar({ isOpen, onClose }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('avatar')
  }
  return (
    <PopupWithForm
      name="avatar"
      title="Редактировать аватар"
      textBtn="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="urlavatar"
        type="url"
        name="urlavatar"
        placeholder="Ссылка на картинку"
        className="popup__input popup-avatar__input-link"
        required
        minLength={2}
        maxLength={30}
      />
      <span className="form__input-error urlavatar-error"></span>
    </PopupWithForm>
  );
}

export default PopupEditAvatar;
