function Card({ onCardOpen, src, name}) {
  return (
    <li className="elements__list-item">
          <article className="element">
            <img src={src} alt={name} className="element__img" onClick={onCardOpen}/>
            <button type="button" className="element__delete-btn"></button>
            <div className="element__caption">
              <h2 className="element__text">{name}</h2>
              <div className="element__like-container">
                <button type="button" className="element__like"></button>
                <p className="element__like-count"></p>
              </div>
            </div>
          </article>
        </li>
  );
}
export default Card;
