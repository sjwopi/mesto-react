import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import api from './Api.js'

function PopupEditAvatar({ isOpen, onClose, onCloseOverlay }) {
  const [avatar, setAvatar] = React.useState('')

  function handleAvatarChange(evt) {
    setAvatar(evt.target.value)
  }
  function handleUpdateAvatar() {
    api
      .editAvatar(avatar)
      .then(() => {
        onClose();
      })
      .catch(console.error);
  }
  return (
    <PopupWithForm
      name="avatar"
      title="Редактировать аватар"
      textBtn="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onCloseOverlay={onCloseOverlay}
      onSubmit={handleUpdateAvatar}
    >
      <input
        id="urlavatar"
        type="url"
        name="urlavatar"
        placeholder="Ссылка на картинку"
        className="popup__input popup-avatar__input-link"
        required
        minLength={2}
        onInput={handleAvatarChange}
      />
      <span className="form__input-error urlavatar-error"></span>
    </PopupWithForm>
  );
}

export default PopupEditAvatar;
