import PopupWithForm from './PopupWithForm.js';

function PopupConfirmAction({ isOpen, onClose }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('deletePlace');
  }
  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      textBtn="Удалить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="deelte-button"
        type="submit"
        value="Удалить"
        className="popup__save-form popup-delete__btn"
      />
    </PopupWithForm>
  );
}

export default PopupConfirmAction;
