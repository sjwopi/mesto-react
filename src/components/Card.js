function Card({ card, onCardOpen, onCardLike, onDeleteClick }) {
  return (
    <li className="elements__list-item">
      <article className="element">
        <img
          src={card.src}
          alt={card.name}
          className="element__img"
          onClick={onCardOpen}
        />
        <button type="button" className="element__delete-btn" onClick={onDeleteClick}></button>
        <div className="element__caption">
          <h2 className="element__text">{card.name}</h2>
          <div className="element__like-container">
            <button type="button" className="element__like"></button>
            <p className="element__like-count" onClick={onCardLike}></p>
          </div>
        </div>
      </article>
    </li>
  );
}
export default Card;
