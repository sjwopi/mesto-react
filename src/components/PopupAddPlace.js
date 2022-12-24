import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import api from './Api.js'

function PopupAddPlace({ isOpen, onClose, onCloseOverlay, cards, setCards }) {
  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')

  function handleAddNewPlace(card) {
    api
      .createCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards])
        onClose();
      })
      .catch(console.error);
  }
  
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      textBtn="Добавить"
      isOpen={isOpen}
      onClose={onClose}
      onCloseOverlay={onCloseOverlay}
      onSubmit={() => {handleAddNewPlace({name, link})}}
    >
      <input
        id="name"
        name="name"
        placeholder="Название"
        className="popup__input popup-add__input-name"
        required
        minLength={2}
        maxLength={30}
        onInput={(evt)=>{setName(evt.target.value)}}
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
        onInput={(evt)=>{setLink(evt.target.value)}}
      />
      <span className="form__input-error url-error"></span>
    </PopupWithForm>
  );
}

export default PopupAddPlace;
