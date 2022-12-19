import ProfileDefaulAvatar from '../images/avatar.png';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-btn" onClick={onEditAvatar}>
            <img
              src={ProfileDefaulAvatar}
              alt="аватарка"
              className="profile__avatar"
            />
          </div>

          <div className="profile__text">
            <div className="profile__name-block">
              <h1 className="profile__full-name">Жак-Ив Кусто</h1>
              <button
                type="button"
                className="profile__edit-btn"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__description">Иследователь океана</p>
          </div>
        </div>

        <button
          type="button"
          className="profile__add-btn"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}
export default Main;
