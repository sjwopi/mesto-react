import React from 'react';
import api from './Api.js'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupAddPlace from './PopupAddPlace.js';
import PopupEditProfile from './PopupEditProfile.js';
import PopupEditAvatar from './PopupEditAvatar.js';
import ImagePopup from './ImagePopup.js';
import PopupConfirmAction from './PopupConfirmAction.js';

function App() {
  const [isPopupEditAvatarOpen, setIsPopupEditAvatarOpen] = React.useState(false);
  const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
  const [isPopupAddPlaceOpen, setIsPopupAddPlaceOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isPopupConfirmActionOpen, setIsPopupConfirmActionOpen] = React.useState({isOpen: false, card: {}});
  const [cards, setCards] = React.useState([])
  const [isCardOpened, setIsCardOpened] = React.useState(null);

  React.useEffect(() => {
    api
    .getInitialCards()
    .then((res) => {
      setCards(res);
    })
    .catch(console.error);
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
    setIsImagePopupOpen(true);
  }
  function handleDeleteClick(card) {
    setIsPopupConfirmActionOpen({ isOpen: true, card: card });
  }
  function deleteCard(card) {
    setCards((state) => state.filter((c) => c._id !== card._id))
  }
  function closeAllPopups() {
    setIsPopupEditAvatarOpen(false);
    setIsPopupEditProfileOpen(false);
    setIsPopupAddPlaceOpen(false);
    setIsImagePopupOpen(false)
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
        cards={cards}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardOpen={handleOpenImageClick}
        onDeleteClick={handleDeleteClick}
      />
      <Footer />

      <PopupEditProfile
        isOpen={isPopupEditProfileOpen}
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
        cards={cards}
        setCards={setCards}
      />
      <PopupConfirmAction
        isOpen={isPopupConfirmActionOpen.isOpen}
        card={isPopupConfirmActionOpen.card}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
        onDeleteCard={deleteCard}
      />
      <ImagePopup
        card={isCardOpened}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        onCloseOverlay={closeCLickOverlay}
      />
    </>
  );
}
export default App;