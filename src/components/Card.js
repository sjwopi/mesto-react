function Card({user, card, onCardOpen, onCardLike, onDeleteClick}){
  function handleOpenClick() {
    onCardOpen(card);
  }
  function handleCardLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onDeleteClick(card);
  }
  const isOwner = (user._id === card.owner._id)
  const isLiked = card.likes.some(like => (like._id === user._id));
  return (
    <li className="elements__list-item">
      <article className="element">
        <img
          src={card.link}
          alt={card.name}
          className="element__img"
          onClick={handleOpenClick}
        />
        {isOwner && <button type="button" className="element__delete-btn" onClick={handleDeleteClick}></button>}
        <div className="element__caption">
          <h2 className="element__text">{card.name}</h2>
          <div className="element__like-container">
            <button type="button" className={'element__like' + (isLiked && ' active')}></button>
            <p className="element__like-count" onClick={handleCardLikeClick}></p>
          </div>
        </div>
      </article>
    </li>
  );
}
export default Card;