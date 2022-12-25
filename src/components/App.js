import React from 'react';
import api from './Api.js'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js';

function App() {
  const [isPopupEditAvatarOpen, setIsPopupEditAvatarOpen] = React.useState(false);
  const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
  const [isPopupAddPlaceOpen, setIsPopupAddPlaceOpen] = React.useState(false);
  const [isPopupConfirmActionOpen, setIsPopupConfirmActionOpen] = React.useState({isOpen: false, card: {}});
  const [isCardOpened, setIsCardOpened] = React.useState(null);

  function handleEditAvatarClick() {
    setIsPopupEditAvatarOpen(true);
  }
  function handleEditProfileClick() {
    setIsPopupEditProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setIsPopupAddPlaceOpen(true);
  }
  function handleOpenImageClick(card) {
    setIsCardOpened(card)
  }
  function handleDeleteClick(card) {
    setIsPopupConfirmActionOpen({ isOpen: false, card: card });
  }

  function editProfile() {

  }



  function closeAllPopups() {
    setIsPopupEditAvatarOpen(false);
    setIsPopupEditProfileOpen(false);
    setIsPopupAddPlaceOpen(false);
    setIsCardOpened(null)
    setIsPopupConfirmActionOpen({isOpen: false, card: {}});
  }
  function closeCLickOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closeAllPopups();
    }
  }
  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardOpen={handleOpenImageClick}
        onDeleteClick={handleDeleteClick}
      />
      <Footer />

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        textBtn="Сохранить"
        isOpen={isPopupEditProfileOpen}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
        onSubmit={editProfile}>
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

      <PopupWithForm
        name="avatar"
        title="Редактировать аватар"
        textBtn="Сохранить"
        isOpen={isPopupEditAvatarOpen}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}>
        <input
          id="urlavatar"
          type="url"
          name="urlavatar"
          placeholder="Ссылка на картинку"
          className="popup__input popup-avatar__input-link"
          required
          minLength={2}
        />
        <span className="form__input-error urlavatar-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        textBtn="Добавить"
        isOpen={isPopupAddPlaceOpen}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
        onSubmit={editProfile}>
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
        />
        <span className="form__input-error url-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        textBtn="Удалить"
        isOpen={isPopupConfirmActionOpen.isOpen}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
        onSubmit={() => {deleteCard(isPopupConfirmActionOpen.card)}}> 
      </PopupWithForm>

      <ImagePopup
        card={isCardOpened}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
      />
    </>
  );
}
export default App;