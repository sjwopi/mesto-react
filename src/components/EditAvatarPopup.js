import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function PopupEditAvatar({ isOpen, onClose, onCloseOverlay, onUpdateAvatar}) {
  const [avatar, setAvatar] = React.useState('')

  function handleAvatarChange(evt) {
    setAvatar(evt.target.value)
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
