import React from 'react';
import ProfileDefaulAvatar from '../images/avatar.png';
import api from './Api.js';
import Card from './Card.js';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardOpen,
  onCardLike,
  onDeleteClick,
}) {
  const [userAvatar, setUserAvatar] = React.useState(ProfileDefaulAvatar);
  const [userName, setUserName] = React.useState(api.getUserInfo().name);
  const [userDescription, setUserDescription] = React.useState(
    api.getUserInfo().about
  );
  api.getUserInfo().then((res) => {
    setUserAvatar(res.avatar);
    setUserName(res.name);
    setUserDescription(res.about);
  });

  const [cards, setCards] = React.useState(api.getInitialCards());
  console.log(cards)
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-btn" onClick={onEditAvatar}>
            <img src={userAvatar} alt="аватарка" className="profile__avatar" />
          </div>

          <div className="profile__text">
            <div className="profile__name-block">
              <h1 className="profile__full-name">{userName}</h1>
              <button
                type="button"
                className="profile__edit-btn"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>

        <button
          type="button"
          className="profile__add-btn"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            <Card
              card={card}
              onCardOpen={onCardOpen}
              onCardLike={onCardLike}
              onDeleteClick={onDeleteClick}
            />;
          })}
        </ul>
      </section>
    </main>
  );
}
export default Main;
