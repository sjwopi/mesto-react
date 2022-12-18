import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupAddPlace from './PopupAddPlace.js'
import PopupEditProfile from './PopupEditProfile.js';
import PopupEditAvatar from './PopupEditAvatar.js';

function App() {
  const [isPopupEditAvatarOpen, setIsPopupEditAvatarOpen] = React.useState(false);
  const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
  const [isPopupAddPlaceOpen, setIsPopupAddPlaceOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsPopupEditAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setIsPopupEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsPopupAddPlaceOpen(true);
  }

  function closeAllPopups() {
    setIsPopupEditAvatarOpen(false);
    setIsPopupEditProfileOpen(false);
    setIsPopupAddPlaceOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onClose={closeAllPopups}
      />
      <Footer />

      <PopupEditProfile
        isOpen={false}
        onClose={closeAllPopups}
      />
      <PopupEditAvatar
        isOpen={false}
        onClose={closeAllPopups}
      />
      <PopupAddPlace
        isOpen={false}
        onClose={closeAllPopups}
      />

      

      <div className="popup popup-card">
        <div className="popup-card__container">
          <h2 className="popup-card__text"></h2>
          <img src="#" alt="#" className="popup-card__img" />
          <button
            type="button"
            className="popup__close-btn popup-card__close-btn"
          ></button>
        </div>
      </div>

      <div className="popup popup-delete">
        <div className="popup__container popup__container_delete">
          <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
          <form noValidate>
            <input
              name="deelte-button"
              type="submit"
              value="Удалить"
              className="popup__save-form popup-delete__btn"
            />
          </form>
          <button
            type="button"
            className="popup__close-btn popup-delete__close-btn"
          ></button>
        </div>
      </div>

      <template id="card">
        <li className="elements__list-item">
          <article className="element">
            <img src="#" alt="публикация" className="element__img" />
            <button type="button" className="element__delete-btn"></button>
            <div className="element__caption">
              <h2 className="element__text"></h2>
              <div className="element__like-container">
                <button type="button" className="element__like"></button>
                <p className="element__like-count"></p>
              </div>
            </div>
          </article>
        </li>
      </template>
    </>
  );
}
export default App;
