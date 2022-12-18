import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <div className="popup popup-edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>

          <form
            name="edit-form"
            className="form popup__form popup-edit__form"
            noValidate
          >
            <input
              id="username"
              name="username"
              placeholder="Имя"
              className="popup__input popup-edit__input-name"
              required
              minLength={2}
              maxLength={40}
            />
            <span className="form__input-error username-error"></span>

            <input
              id="description"
              name="description"
              placeholder="Вид деятельности"
              className="popup__input popup-edit__input-description"
              required
              minLength={2}
              maxLength={200}
            />
            <span className="form__input-error description-error"></span>

            <input
              name="save-button"
              type="submit"
              value="Сохранить"
              className="popup__save-form popup-edit__save-form"
            />
          </form>

          <button
            type="button"
            className="popup__close-btn popup-edit__close-btn"
          ></button>
        </div>
      </div>

      <div className="popup popup-add">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>

          <form
            name="add-form"
            className="form popup__form popup-add__form"
            noValidate
          >
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
            />
            <span className="form__input-error url-error"></span>

            <input
              name="save-button"
              type="submit"
              value="Создать"
              className="popup__save-form popup-add__save-form"
            />
          </form>

          <button
            type="button"
            className="popup__close-btn popup-add__close-btn"
          ></button>
        </div>
      </div>
      <div className="popup popup-avatar">
        <div className="popup__container popup__container_avatar">
          <h2 className="popup__title">Редактировать аватар?</h2>

          <form
            name="avatar-form"
            className="form popup__form popup-avatar__form"
            noValidate
          >
            <input
              id="urlavatar"
              type="url"
              name="urlavatar"
              placeholder="Ссылка на картинку"
              className="popup__input popup-avatar__input-link"
              required
            />
            <span className="form__input-error urlavatar-error"></span>

            <input
              name="save-button"
              type="submit"
              value="Сохранить"
              className="popup__save-form popup-avatar__save-form"
            />
          </form>

          <button
            type="button"
            className="popup__close-btn popup-avatar__close-btn"
          ></button>
        </div>
      </div>

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
