import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupAddPlace from './PopupAddPlace.js'
import PopupEditProfile from './PopupEditProfile.js';
import PopupEditAvatar from './PopupEditAvatar.js';
import Card from './Card.js';
import CardPopup from './CardPopup.js';
import PopupConfirmAction from './PopupConfirmAction.js';

function App() {
  const [isPopupEditAvatarOpen, setIsPopupEditAvatarOpen] = React.useState(false);
  const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
  const [isPopupAddPlaceOpen, setIsPopupAddPlaceOpen] = React.useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = React.useState(false)
  const [isPopupConfirmActionOpen, setIsPopupConfirmActionOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsPopupEditAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setIsPopupEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsPopupAddPlaceOpen(true);
  }
  function handleDeleteCard() {
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

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onDelete={handleDeleteCard}
        onClose={closeAllPopups}
      />
      <Footer />

      <PopupEditProfile
        isOpen={isPopupEditProfileOpen}
        onClose={closeAllPopups}
      />
      <PopupEditAvatar
        isOpen={isPopupEditAvatarOpen}
        onClose={closeAllPopups}
      />
      <PopupAddPlace
        isOpen={isPopupAddPlaceOpen}
        onClose={closeAllPopups}
      />
      <PopupConfirmAction
        isOpen={isPopupConfirmActionOpen}
        onClose={closeAllPopups}
      />
      <Card
        onCardOpen={handleOpenCardClick}
        src={'#'}
        name={'name'}
      />
      <CardPopup
        isOpen={isCardPopupOpen}
        onClose={closeAllPopups}
        src={'#'}
        name={'name'}
      />
    </>
  );
}
export default App;
