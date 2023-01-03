function Card({card, onCardOpen}) {
  function handleCardClick() {
    onCardOpen(card)
  }

  return (
    <li className="elements__list-item">
      <article className="element">
        <img
          src={card.link}
          alt={card.name}
          className="element__img"
          onClick={handleCardClick}
        />
        <div className="element__caption">
          <h2 className="element__text">{card.name}</h2>
          <div className="element__like-container">
            <button type="button" className={'element__like'}></button>
            <p className="element__like-count">{card.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
}
export default Card;