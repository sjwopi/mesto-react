import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="username"
        name="username"
        placeholder="Имя"
        className={`popup__input popup-edit__input-name`}
        required
        minLength={2}
        maxLength={40}
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
      />
      <span className="form__input-error description-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
