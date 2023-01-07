import React from 'react';
import api from '../utils/api.js'
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js'
import EditProfilePopup from './EditProfilePopup.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isPopupEditAvatarOpen, setIsPopupEditAvatarOpen] = React.useState(false);
  const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
  const [isPopupAddPlaceOpen, setIsPopupAddPlaceOpen] = React.useState(false);
  const [isPopupConfirmActionOpen, setIsPopupConfirmActionOpen] = React.useState({isOpen: false, card: {}});
  const [isCardOpened, setIsCardOpened] = React.useState(null);

  const [cards, setCards] = React.useState([]);
  const [currentUser, setCorrentUser] = React.useState({});

  React.useEffect(() => {
    api
    .getInitialCards()
    .then((res) => {
      setCards(res);
    })
    .catch(console.error);
    api
      .getUserInfo()
      .then((res) => {
        setCorrentUser(res);
      })
      .catch(console.error)
  }, []);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api
        .setLike(card._id)
        .then((newCard) => { setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      });
    } else {
      api
      .deleteLike(card._id)
      .then((newCard) => { setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
    }
  }
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((crd) => crd._id !== card._id));
        closeAllPopups();
      })
      .catch(console.error);
  }
  function handleUpdateUser(userInfo) {
    api.editUserInfo(userInfo)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch(console.error);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        cards={cards}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardOpen={handleOpenImageClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />

      <EditProfilePopup
        isOpen={isPopupEditProfileOpen}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
        onUpdateUser={handleUpdateUser}
      />
      <EditAvatarePopup
        isOpen={isPopupEditAvatarOpen}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
        onUpdateUser={handleUpdateAvatar}
      />

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
        onCloseOverlay={closeCLickOverlay}>
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
        onCloseOverlay={closeCLickOverlay}>
      </PopupWithForm>

      <ImagePopup
        card={isCardOpened}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
      />
    </CurrentUserContext.Provider>
  );
}
export default App;