import PopupWithForm from './PopupWithForm.js';
import api from './Api.js';

function PopupConfirmAction({ isOpen, onClose, onCloseOverlay, card, onDeleteCard }) {
  function deleteCard() {
    api.deleteCard(card._id);
    onDeleteCard(card);
    onClose();
  }
  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      textBtn="Удалить"
      isOpen={isOpen}
      onClose={onClose}
      onCloseOverlay={onCloseOverlay}
      onSubmit={deleteCard}
    >
    </PopupWithForm>
  );
}

export default PopupConfirmAction;
