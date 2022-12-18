
function PopupWithForm({
  name,
  title,
  textBtn,
  isOpen,
  onClose,
  children,
  onSubmit,
}) {
  return (
    <div className={`popup popup-${name}` + (isOpen && ' popup_opened')}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>

        <form
          name={`${name}-form`}
          className={`form popup__form popup-${name}__form`}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
        </form>
        <input
          name="save-button"
          type="submit"
          value={textBtn}
          className={`popup__save-form popup-${name}__save-form`}
        />
        <button
          type="button"
          className={`popup__close-btn popup-${name}__close-btn`}
          onClose={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;