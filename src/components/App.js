import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupAddPlace from './PopupAddPlace.js';
import PopupEditProfile from './PopupEditProfile.js';
import PopupEditAvatar from './PopupEditAvatar.js';
import CardPopup from './CardPopup.js';
import PopupConfirmAction from './PopupConfirmAction.js';

function App() {
  const [isPopupEditAvatarOpen, setIsPopupEditAvatarOpen] =
    React.useState(false);
  const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] =
    React.useState(false);
  const [isPopupAddPlaceOpen, setIsPopupAddPlaceOpen] = React.useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = React.useState(false);
  const [isPopupConfirmActionOpen, setIsPopupConfirmActionOpen] =
    React.useState(false);

  function handleEditAvatarClick() {
    setIsPopupEditAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setIsPopupEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsPopupAddPlaceOpen(true);
  }
  function handlePopupDeleteCard() {
    setIsPopupConfirmActionOpen(true);
  }
  function handleOpenCardClick() {
    setIsCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsPopupEditAvatarOpen(false);
    setIsPopupEditProfileOpen(false);
    setIsPopupAddPlaceOpen(false);
    setIsPopupConfirmActionOpen(false);
  }
  function closeCLickOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closeAllPopups();
    }
  }
  function handleUpdateProfile(userInfo) {
    api
      .setUserInfo(userInfo)
      .then((newUserInfo) => {
        closeAllPopups();
      })
      .catch(console.error);
  }
  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleOpenCardClick}
      />
      <Footer />

      <PopupEditProfile
        isOpen={isPopupEditProfileOpen}
        onEditProfile={handleUpdateProfile}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
      />
      <PopupEditAvatar
        isOpen={isPopupEditAvatarOpen}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
      />
      <PopupAddPlace
        isOpen={isPopupAddPlaceOpen}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
      />
      <PopupConfirmAction
        isOpen={isPopupConfirmActionOpen}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
      />
      <CardPopup
        isOpen={isCardPopupOpen}
        onClose={closeAllPopups}
        src={'#'}
        name={'name'}
        onCloseOverlay={closeCLickOverlay}
      />
    </>
  );
}
export default App;
