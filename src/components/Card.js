function Card({userId, card, onCardOpen, onCardLike, onDeleteClick}) {
  function handleCardLike() {
    onCardLike(card, isLiked)
  }

  const isOwner = (userId === card.owner._id)
  const isLiked = card.likes.some(like => (like._id === userId));
  return (
    <li className="elements__list-item">
      <article className="element">
        <img
          src={card.link}
          alt={card.name}
          className="element__img"
          onClick={onCardOpen}
        />
        {isOwner && <button type="button" className="element__delete-btn" onClick={onDeleteClick}></button>}
        <div className="element__caption">
          <h2 className="element__text">{card.name}</h2>
          <div className="element__like-container" onClick={handleCardLike}>
            <button type="button" className={'element__like' + (isLiked ? ' element__like_active' : '')}></button>
            <p className="element__like-count">{card.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
}
export default Card;