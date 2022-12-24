import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import api from './Api.js'

function PopupEditProfile({ isOpen, onClose, onCloseOverlay }) {
  const [name, setName] = React.useState('')
  const [about, setAbout] = React.useState('')

  function handleNameChange(evt) {
    setName(evt.target.value)
  }
  function handleAboutChange(evt) {
    setAbout(evt.target.value)
  }
  function handleUpdateProfile(userInfo) {
    api
      .editUserInfo(userInfo)
      .then(() => {
        
        onClose();
      })
      .catch(console.error);
  }
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      textBtn="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onCloseOverlay={onCloseOverlay}
      onSubmit={() => {handleUpdateProfile({name, about})}}
    >
      <input
        id="username"
        name="username"
        placeholder="Имя"
        className={`popup__input popup-edit__input-name`}
        required
        minLength={2}
        maxLength={40}
        onInput={handleNameChange}
      />
      <span className="form__input-error username-error"></span>
      <input
        id="description"
        name="description"
        placeholder="Вид деятельности"
        className={`popup__input popup-edit__input-description`}
        required
        minLength={2}
        maxLength={200}
        onInput={handleAboutChange}
      />
      <span className="form__input-error description-error"></span>
    </PopupWithForm>
  );
}
export default PopupEditProfile;
